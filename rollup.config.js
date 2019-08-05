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
      file: 'lib/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'lib/index.mjs',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins,
}
