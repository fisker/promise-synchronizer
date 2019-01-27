module.exports = {
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  bracketSpacing: false,
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: '*.js',
      options: {
        parser: 'babel',
      },
    },
  ],
}
