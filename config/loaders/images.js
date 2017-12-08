import path from 'path';
import { PATHS, ROOT } from '../config';

const images = {
  test: /\.(gif|png|jpe?g|webp)$/i,
  use: [
    {
      loader: 'file-loader',
      query: {
        name: '[name].[ext]?[hash]',
        outputPath: 'img/'
      }
    },
    {
      loader: 'image-webpack-loader',
      query: {
        gifsicle: {
          interlaced: true
        },
        mozjpeg: {
          quality: 75,
          progressive: true,
        },
        pngquant: {
          quality: '75-90',
          speed: 4
        },
        webp: {
          quality: 75
        }
      }
    }
  ]
};

const svg = {
  test: /\.svg$/,
  use: [
    {
      loader: 'svg-sprite-loader',
      options: {
        extract: true,
        spriteFilename: 'sprite.svg'
      }
    }
  ]
};

export { images, svg };
