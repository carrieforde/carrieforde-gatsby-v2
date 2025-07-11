/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
    'selector-class-pattern': null,
    'custom-property-empty-line-before': null,
    'property-no-unknown': [true, { ignoreProperties: ['composes'] }],
    'value-keyword-case': null,
    'declaration-block-no-redundant-longhand-properties': null,
  },
};
