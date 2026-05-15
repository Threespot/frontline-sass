# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## General Behavior

When answering WordPress/PHP questions, provide a direct answer first before exploring the codebase. Only investigate files if the user asks for project-specific context or if the question genuinely requires it.

## Code Style / Conventions

Never introduce Unicode smart quotes or curly quotes in any code file (PHP, JS, SCSS, Blade, JSON, etc.). Always use straight quotes (' and "). Do not alter existing comments solely to replace curly quotes with straight quotes — only avoid introducing new ones. A PostToolUse hook in `.claude/settings.json` scans added lines after every Edit and will block if any contain curly quotes.

## Overview

Frontline Sass is Threespot's base Sass framework — a library of mixins, functions, and variables consumed by other projects as an npm package. There is no compiled CSS output; consumers import `src/_frontline.scss` (set as `main` in `package.json`) and use the helpers in their own builds.

## Commands

- `yarn test` — run the Sass-True unit tests via Gulp (`tests/tests.scss` aggregates `tests/functions/_index.scss` and `tests/mixins/_index.scss`).
- `yarn lint` — run stylelint over `src/**/*.scss` using `.stylelintrc.js`.
- `yarn docs` — regenerate the SassDoc site into `sassdoc/documentation/`.
- `yarn deploy` — build docs and push them to `gh-pages` via the `gh-pages` package.
- `yarn patch` / `yarn minor` / `yarn major` — bump the npm version. Prompts for confirmation, then runs `preversion` (`yarn lint && yarn test`), `version` (regenerates SassDoc and `git add .`), and `postversion` (`git push && git push --tags`).

Node version is pinned to `20.15.0` via `.tool-versions` (asdf).

## Architecture

Entry point `src/_frontline.scss` only forwards three indexes — variables, functions, and mixins. Each subdirectory has its own `_index.scss` that `@forward`s the individual partials. To add a new helper, create the partial in the appropriate folder and add it to that folder's `_index.scss`; nothing else needs to be wired up.

Tests use `sass-true` and run by piping `tests/tests.scss` through `gulp-sass`; a Sass compile error is the test failure signal. Test partials mirror the `src/` layout (e.g. `tests/functions/_easings.scss` covers `src/functions/_easings.scss`) and import the library via `@use '../src/_frontline' as *;`. New tests must be registered in the matching `tests/<group>/_index.scss`.

The stylelint config (`.stylelintrc.js`) extends nothing — rules are listed inline and most are disabled. The `at-rule-no-unknown` allowlist accepts both Sass and Tailwind directives because consumer projects may mix them; preserve that allowlist when editing the config.

SassDoc generation reads `src/**/*.scss` and only publishes items marked `@access public`. Block comments using SassDoc annotations (`///`) drive the documentation site at https://threespot.github.io/frontline-sass/documentation/.

## Release notes

- `main` in `package.json` points at `src/_frontline.scss` — the published package ships raw Sass, not compiled CSS. Do not add a build step that produces CSS as the package entry point.
- Avoid `@charset 'UTF-8';` directives in source files (removed in 5.1.6 because they broke some consumer build setups).
- Avoid Sass's `if()` function — prefer `@if`/`@else` to sidestep the deprecation warning (see commit `d611e91`).
