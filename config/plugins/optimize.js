import path from 'path';
import webpack from 'webpack';

import HtmlCriticalPlugin from "html-critical-webpack-plugin";

import { PATHS, ROOT } from '../config';

const critical = new HtmlCriticalPlugin({
  base: path.join(ROOT, PATHS.get('dist')),
  src: 'index.html',
  dest: 'index.html',
  inline: true,
  minify: true,
  extract: true
});

const uglify = new webpack.optimize.UglifyJsPlugin();

const commons = new webpack.optimize.CommonsChunkPlugin({
  name: 'commons',
  filename: 'js/commons.js',
  minChunks: module =>
    module.context && module.context.indexOf('node_modules') !== -1
});

const manifest = new webpack.optimize.CommonsChunkPlugin({
  name: 'manifest'
});

export {
  critical,
  uglify,
  commons,
  manifest
};
