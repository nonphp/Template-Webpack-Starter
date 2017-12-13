import path from 'path';
import { PATHS, ROOT, NODE_ENV } from '../config';

const scripts = {
  test: /\.(js|jsx)$/,
  include: path.join(ROOT, PATHS.get('src')),
  exclude: /(node_modules)/,
  use: [
    {
      loader: 'babel-loader?cacheDirectory'
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
