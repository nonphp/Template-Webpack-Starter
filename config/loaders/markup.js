import { NODE_ENV } from "../config";

const html = {
  test: /\.html$/,
  use: [
    {
      loader: "html-loader",
      options: {
        minimize: NODE_ENV === "production"
      }
    }
  ]
};

const pug = {
  test: /\.pug$/,
  use: [
    'html-loader',
    {
      loader: 'pug-html-loader',
      options: {
        exports: false
      }
    }
  ]
};

// export { html, pug };
export { html, pug };
