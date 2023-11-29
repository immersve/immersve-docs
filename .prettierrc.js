module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: ['*.yaml', '*.yml'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
