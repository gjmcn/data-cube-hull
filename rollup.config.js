import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/hull.js',
  output: {
    extend: false,
    file: 'dist/hull.js',
    format: 'umd',
    name: 'hull'
  },
  plugins: [
    commonjs({
      sourceMap: false
    }),
    resolve(),
    uglify()
  ]
};