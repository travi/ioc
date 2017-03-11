import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/container.js',
  plugins: [
    babel({
      babelrc: false,
      exclude: ['./node_modules/**'],
      presets: ['es2015-rollup']
    })
  ],
  targets: [
    {dest: 'lib/ioc.cjs.js', format: 'cjs'},
    {dest: 'lib/ioc.es.js', format: 'es'}
  ]
};
