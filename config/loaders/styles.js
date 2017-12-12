import path from 'path';

import postcssImport from 'postcss-import';
import stylelint from 'stylelint';
import postcssReporter from 'postcss-reporter';
import postcssCssnext from 'postcss-cssnext';
import postcssRemoveRoot from 'postcss-remove-root';
import cssMqpacker from 'css-mqpacker';
import cssnano from 'cssnano';

import { PATHS, ROOT, NODE_ENV, BROWSERS } from '../config';

import { extractCSS } from '../plugins';

const styleLoader = {
  loader: 'style-loader'
};

const cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap: NODE_ENV !== 'production',
    root: '/',
    url: true,
    alias: {},
    import: true,
    modules: false,
    minimize: NODE_ENV === 'production',
    sourceMap: true,
    camelCase: false,
    importLoaders: 0
  }
};

const cssUse = [
  cssLoader,
  {
    loader: 'postcss-loader',
    options: {
      exec: undefined,
      parser: undefined,
      syntax: undefined,
      stringifier: undefined,
      config: {
        path: path.join(ROOT, PATHS.get('config'))
      },
      plugins: loader => [
        postcssImport(),
        // stylelint(),
        postcssReporter(),
        postcssCssnext({
          browsers: BROWSERS
        }),
        postcssRemoveRoot,
        cssMqpacker({
          sort: true
        }),
        cssnano({
          autoprefixer: false,
          safe: true
        })
      ],
      sourceMap: true
    }
  }
];

const styles = {
  test: /\.css$/,
  use:
    NODE_ENV === "production"
      ? extractCSS.extract(cssUse)
      : [styleLoader, ...cssUse]
};

const fonts = {
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: [
    {
      loader: 'file-loader',
      query: {
        name: '[name].[ext]',
        outputPath: 'fonts/'
      }
    }
  ]
};

export { styles, fonts };
