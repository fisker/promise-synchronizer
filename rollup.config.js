import rollupPrettier from 'rollup-plugin-prettier'
import filesize from 'rollup-plugin-filesize'
import prettier from 'prettier'

const prettierConfig = prettier.resolveConfig.sync('src/index.js')

const plugins = [
  rollupPrettier({
    ...prettierConfig,
    sourcemap: true,
  }),
  filesize(),
]

export default {
  input: `src/index.js`,
  output: [
    {
      file: 'lib/index.common.js',
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
