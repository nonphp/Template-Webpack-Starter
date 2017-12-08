# Template-Webpack-Starter (TWS)

TWS is a Webpack 3, ES6, PostCSS, and Pug boilerplate that utilizes some of the best open source tools around:

* [Node.js](https://github.com/nodejs/node) & [Yarn](https://github.com/yarnpkg)
* [Webpack 3](https://github.com/webpack/webpack)
* [Babel](https://github.com/babel/babel) (ES6)
* [ESLint](https://github.com/eslint/eslint)
* [Pug](https://pugjs.org)
* [PostCSS](https://github.com/postcss/postcss)
  * [cssnano](https://github.com/ben-eb/cssnano)
  * [cssnext](https://github.com/MoOx/postcss-cssnext)
  * [MQPacker](https://github.com/hail2u/node-css-mqpacker)
  * [PostCSS Import](https://github.com/postcss/postcss-import)
  * [stylelint](https://github.com/stylelint/stylelint)
* ...and more!

## Getting started

1. Install [Node.js](https://nodejs.org) (latest LTS recommended)
2. Install [Yarn](https://yarnpkg.com)
3. Clone this repo
4. Install dependencies by running `yarn` in your project root directory

_Note: if you hate Yarn for some reason, you can skip Step 2 and use `npm install` instead  of `yarn` in Step 4._

## Building, watching, and developing

### Local development

[webpack-dev-server](https://github.com/webpack/webpack-dev-server) is used to serve up your project at [http://localhost:8080](http://localhost:8080) for streamlined and convenient development.

```
cd /path/to/project
npm run dev
```

### building for production
Use `npm run build` in your project root to run a production build.

Production builds compile & minify your `/src` into `/dist` for distribution and/or integration.

```
cd /path/to/project
npm run build
```

## Other features

### Fetch and promise polyfills

Because TWS was built to accommodate ES6 & CommonJS, it is assumed that you'll be using [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for asynchronous requests.

Fetch is supported in all modern browsers, but some old dogs still don't support it and that's what we need the [es6-promise](https://github.com/stefanpenner/es6-promise) & [whatwg-fetch](https://github.com/github/fetch) polyfills for.

If you want to remove these for any reason, perform the following steps:

1. run `yarn remove es6-promise whatwg-fetch` in the project root to remove the dependencies
2. remove the first few lines of `/src/bundle.js` (it'll be obvious which ones)

_Note: if you think you might use fetch in the future, comment-out the includes instead of deleting them._

### Javascript and css linting

TWS uses [ESLint](http://eslint.org/) for Javascript (ES6) linting and [stylelint](https://github.com/stylelint/stylelint) for CSS linting. The configs (`/.eslintrc` and `/.stylelintrc` respectively) included out of the box contain some basic common rules. Modify them to your liking to encourage consistent code throughout your project.

#### Airbnb eslint config

TWS enforces the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with ESLint via [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb). These rules are basically the industry standard right now, so I'd recommend adhering to them, but you can override individual rules via the project `/.eslintrc` file.


## License

This thing is completely free, open source and public domain, so you are free to do whatever you want with it -- commercially or personally. Star the project and tell a friend, or erase all signs of origin and tell your coworkers that you made it yourself. It's all good!

## Credits

I got a lot of inspiration from the following amazing projects. Check them out, use them, live them!

* [bstaruk / starbase](https://github.com/bstaruk/starbase)
* [ADCI / webpack-starter-kit](https://github.com/ADCI/webpack-starter-kit)
* [dmnsgn/frontend-boilerplate](https://github.com/dmnsgn/frontend-boilerplate)
