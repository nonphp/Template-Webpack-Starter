import { PATHS } from './config';

const stats = {
  // fallback value for stats options when an option is not defined (has precedence over local webpack defaults)
  all: undefined,
  // Add asset Information
  assets: true,
  // Sort assets by a field (You can reverse the sort with `!field`)
  assetsSort: 'field',
  // Add information about cached (not built) modules
  cached: true,
  // Show cached assets (setting this to `false` only shows emitted files)
  cachedAssets: true,
  // Add children information
  children: false,
  // Add chunk information (setting this to `false` allows for a less verbose output)
  chunks: true,
  // Add built modules information to chunk information
  chunkModules: false,
  // Add the origins of chunks and chunk merging info
  chunkOrigins: false,
  // Sort the chunks by a field
  // You can reverse the sort with `!field`. Default is `id`.
  chunksSort: 'field',
  // Context directory for request shortening
  context: '../src/',
  // `webpack --colors` equivalent
  colors: true,
  // Display the distance from the entry point for each module
  depth: false,
  // Display the entry points with the corresponding bundles
  entrypoints: false,
  // Add --env information
  env: false,
  // Add errors
  errors: true,
  // Add details to errors (like resolving log)
  errorDetails: true,
  // Add the hash of the compilation
  hash: true,
  // Set the maximum number of modules to be shown
  maxModules: 0,
  // Add built modules information
  modules: true,
  // Sort the modules by a field (You can reverse the sort with `!field`)
  modulesSort: 'field',
  // Show dependencies and origin of warnings/errors (since webpack 2.5.0)
  moduleTrace: true,
  // Show performance hint when file size exceeds `performance.maxAssetSize`
  performance: true,
  // Show the exports of the modules
  providedExports: false,
  // Add public path information
  publicPath: false,
  // Add information about the reasons why modules are included
  reasons: false,
  // Add the source code of modules
  source: true,
  // Add timing information
  timings: true,
  // Show which exports of a module are used
  usedExports: false,
  // Add webpack version information
  version: false,
  // Add warnings
  warnings: true
};

export default {
  // allowedHosts: [],
  // bonjour: true,
  clientLogLevel: 'info',
  compress: true,
  contentBase: PATHS.get('dist'),
  disableHostCheck: true,
  // filename: 'bundle.js',
  // headers: {
  //   'X-Custom-Foo': 'bar'
  // },
  historyApiFallback: true,
  host: '0.0.0.0',
  hot: true,
  // hotOnly: true,
  // https: true,
  inline: true,
  // lazy: true,
  noInfo: false,
  // open: true,
  // openPage: '/api',
  overlay: true,
  // pfx: '/path/to/file.pfx',
  // pfxPassphrase: 'passphrase',
  port: 8080,
  // proxy: {
  //   '/api': 'http://localhost:3000'
  // },
  // public: 'myapp.test:80',
  // publicPath: '/assets/',
  quiet: false,
  // setup(app) {
  //   app.get('/some/path', function(req, res) {
  //     res.json({ custom: 'response' });
  //   });
  // }
  // socket: 'socket',
  // staticOptions: {
  //   redirect: false
  // },
  // stats: 'normal', // 'errors-only' | 'minimal' | 'none' | 'normal' | 'verbose'
  stats: stats,
  // useLocalIp: true,
  watchContentBase: false,
  watchOptions: {
    poll: 1000
  }
};
