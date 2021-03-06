import { Config } from '@stencil/core';
import {sass}  from '@stencil/sass';
export const config: Config = {
  namespace: 'maps',
  globalScript: './src/global/script.ts',
  globalStyle: './src/global/style.css',
  plugins: [sass({
    injectGlobalPaths: [
      'src/global/core.scss' 
 
    ]
  })],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],

};
