import reslove from 'rollup-plugin-node-resolve';

import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';

export default {
  input: "src/index.js",
  output: [{
     dir: "lib/",
     format: 'cjs',
     sourceMap: true
  }
],
  sourceMap: true,
  plugins: [
      reslove(),
      eslint({fix: true}),
      commonjs(),
      
      
     
  ]
}
