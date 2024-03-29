module.exports = {
  plugins: ['stylelint-scss'],
  customSyntax: 'postcss-scss',
  rules: {
    'alpha-value-notation': null,
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'apply',
          'at-root',
          'content',
          'debug',
          'each',
          'else',
          'error',
          'extend',
          'for',
          'forward',
          'function',
          'if',
          'include',
          'mixin',
          'responsive',
          'return',
          'screen',
          'tailwind',
          'use',
          'variants',
          'warn',
          'while',
        ],
      },
    ],
    'block-closing-brace-empty-line-before': null,
    'block-closing-brace-newline-before': null,
    'block-no-empty': null,
    'color-function-notation': null,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': null,
    'comment-empty-line-before': null,
    'comment-whitespace-inside': null,
    'custom-property-empty-line-before': null,
    'custom-property-pattern': null,
    'declaration-colon-newline-after': null,
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': null,
    'font-family-name-quotes': null,
    'font-family-no-missing-generic-family-keyword': null,
    'function-no-unknown': null,
    'function-url-quotes': null,
    indentation: [2, { ignore: ['value'] }],
    'max-empty-lines': 2,
    'max-line-length': null,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-no-unknown': null,
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'no-descending-specificity': null,
    'no-duplicate-selectors': true,
    'no-empty-source': null,
    'no-missing-end-of-source-newline': null,
    'number-leading-zero': 'always',
    'rule-empty-line-before': null,
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': null,
    'selector-combinator-space-after': 'always',
    'selector-list-comma-newline-after': null,
    'selector-pseudo-element-colon-notation': null,
    'string-quotes': null,
    'value-keyword-case': null,
  },
};
