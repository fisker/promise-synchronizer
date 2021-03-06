import prettier from 'rollup-plugin-prettier'

export default {
  input: 'src/index.mjs',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',
    },
  ],
  plugins: [prettier()],
}
