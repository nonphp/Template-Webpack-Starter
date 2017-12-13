import path from 'path';
import webpack from "webpack";
import CopyWebpackPlugin from 'copy-webpack-plugin';
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';
import { PATHS, ROOT } from '../config';

const copyStatic = new CopyWebpackPlugin([
  {
    context: path.join(ROOT, PATHS.get('src'), 'static/'),
    to: path.join(ROOT, PATHS.get('dist')),
    from: '**/**'
  }
]);

const svgSprite = new SpriteLoaderPlugin();

export {
  copyStatic,
  svgSprite
};
