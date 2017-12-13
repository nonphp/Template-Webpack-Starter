import path from 'path';
import fs from 'fs';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { NODE_ENV } from './config';
import { clean } from './plugins/clean';
import { sitemap } from './plugins/sitemap';
import { copyStatic, svgSprite } from './plugins/assets';
import { htmlIndex, scriptExt } from './plugins/html';
import { offline } from './plugins/offline';
import {
  // hardSource,
  purify,
  critical,
  uglify,
  commons,
  manifest
} from './plugins/optimize';
import {
  define,
  HMR,
  namedModules,
  hashedModuleIds,
  banner
} from './plugins/utils';

const extractCSS = new ExtractTextPlugin('css/app.[contentHash].css');

export { extractCSS };

export default [
  NODE_ENV === 'production' ? clean : 0,
  define,
  // hardSource,
  NODE_ENV === 'development' ? HMR : 0,
  NODE_ENV === 'development' ? namedModules : hashedModuleIds,
  htmlIndex,
  NODE_ENV === 'production' ? extractCSS : 0,
  NODE_ENV === 'production' ? purify : 0,
  NODE_ENV === 'production' ? critical : 0,
  NODE_ENV === 'production' ? uglify : 0,
  NODE_ENV === 'production' ? scriptExt : 0,
  commons,
  manifest,
  NODE_ENV === 'production' ? copyStatic : 0,
  svgSprite,
  NODE_ENV === 'production' ? sitemap : 0,
  NODE_ENV === 'production' ? banner : 0,
  NODE_ENV === 'production' ? offline : 0
].filter(Boolean);
