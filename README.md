# Frontline Sass
[![npm version](https://badge.fury.io/js/frontline-sass.svg)](https://badge.fury.io/js/frontline-sass)

Threespot's Sass framework

[Documentation](http://threespot.github.io/frontline-sass/documentation/)

[Atom Snippets](https://atom.io/packages/frontline-sass-snippets)


## Testing

Tests are written in Sass using [sass-true](https://www.oddbird.net/true/) and run through [Mocha](https://mochajs.org/). Each function and mixin in `src/` has a matching partial in `tests/` with the same name, registered in the folder's `_index.scss`.

```bash
yarn test
```

### Adding a test for a new helper

1. Create `tests/<group>/_my-helper.scss` (where `<group>` is `functions` or `mixins`).
2. Pull in sass-true and the library:
   ```scss
   @use 'true' as *;
   @use '../../src/_frontline' as *;
   ```
3. Wrap assertions in `describe` / `it` blocks. Use `assert-equal` for functions that return a value, and `assert { output { ... } expect { ... } }` to compare emitted CSS for mixins.
4. Register the partial in `tests/<group>/_index.scss` with `@forward "my-helper";`.

Reference examples: `tests/functions/_str-replace.scss` (return value), `tests/mixins/_visuallyhidden.scss` (CSS output).


## License

Frontline Sass is free software, and may be redistributed under the terms of the [MIT license](https://github.com/Threespot/frontline-sass/blob/master/LICENSE.md). If Frontline Sass works great for your project, [we'd love to hear about it](http://twitter.com/threespot)!

## Thanks

Our work stands on the shoulders of giants, and we're very thankful to the many people that made Frontline Sass possible either by publishing code we used, or by being an inspiration for this project.

- [Kitty Giraudel](https://kittygiraudel.com)
- [SassDoc](http://sassdoc.com)
- [SassyTester](https://github.com/KittyGiraudel/SassyTester)
- [Sass Guidelines](http://sass-guidelin.es)

## About Threespot

Threespot is an independent digital agency hell-bent on helping those, and only those, who are committed to helping others. Find out more at [https://www.threespot.com](https://www.threespot.com).

[![Threespot](https://avatars3.githubusercontent.com/u/370822?v=3&s=100)](https://www.threespot.com)
