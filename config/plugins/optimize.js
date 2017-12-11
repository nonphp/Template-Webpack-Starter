import path from 'path';
import glob from 'glob';
import webpack from 'webpack';

import PurifyCSSPlugin from 'purifycss-webpack';
const CriticalPlugin = require('webpack-plugin-critical').CriticalPlugin;

import { PATHS, ROOT } from '../config';

const purify = new PurifyCSSPlugin({
  paths: glob.sync(path.join(ROOT, PATHS.get('src'), '**/*.pug'))
});

const critical = new CriticalPlugin({
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
  purify,
  critical,
  uglify,
  commons,
  manifest
};
