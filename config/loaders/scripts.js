import path from 'path';

import { PATHS, ROOT, NODE_ENV } from '../config';

// babel-preset-env: https://github.com/babel/babel-preset-env
const scripts = {
  test: /\.(js|jsx)$/,
  include: path.join(ROOT, PATHS.get('src')),
  exclude: /(node_modules)/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [
          [
            'env',
            {
              modules: false
            }
          ]
        ]
      }
    },
    {
      loader: 'eslint-loader',
      options: {
        cache: true,
        emitWarning: true,
        configFile: '.eslintrc'
      }
    }
  ]
};

export { scripts };

// ESLINT / PRETTIER?
