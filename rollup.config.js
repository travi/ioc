import babel from 'rollup-plugin-babel';

export default {
  input: 'src/container.js',
  plugins: [
    babel({
      babelrc: false,
      exclude: ['./node_modules/**'],
      presets: ['es2015-rollup']
    })
  ],
  output: [
    {file: 'lib/ioc.cjs.js', format: 'cjs', sourcemap: true},
    {file: 'lib/ioc.es.js', format: 'es', sourcemap: true}
  ]
};
