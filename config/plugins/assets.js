import path from 'path';
import webpack from "webpack";

import CopyWebpackPlugin from 'copy-webpack-plugin';

import { PATHS, ROOT } from '../config';

const copyStatic = new CopyWebpackPlugin([
  {
    context: path.join(ROOT, PATHS.get('src'), 'static/'),
    to: path.join(ROOT, PATHS.get('dist')),
    from: '**/**'
  }
]);

export { copyStatic };
