module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: ['*.yaml', '*.yml', '*.md'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
