import rollupPrettier from 'rollup-plugin-prettier'
import prettier from 'prettier'

const prettierConfig = prettier.resolveConfig.sync('src/index.js')

const plugins = [
  rollupPrettier({
    ...prettierConfig,
    sourcemap: true,
  }),
]

export default {
  input: `src/index.js`,
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins,
}
