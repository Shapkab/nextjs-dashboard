export default [
  {
    ignores: ['.config/*'],
  },
  {
    plugins: ['jsx-a11y'],
  },
  {
    rules: {
      'jsx-a11y/rule-name': 2,
    },
  },
  {
    extends: ['plugin:jsx-a11y/recommended'],
  },
];
