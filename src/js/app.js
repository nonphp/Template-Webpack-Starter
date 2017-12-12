// promise & fetch polyfills
import 'es6-promise/auto';
import 'whatwg-fetch';

// offline runtime
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

// baseline app styles
import '../css/app.css';

// Offline
OfflinePluginRuntime.install();

// SVG Sprite creation
const svgModules = require.context('../img/svg', false, /\.svg$/);
svgModules.keys().forEach(svgModules);
