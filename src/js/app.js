// POLYFILLS
import 'es6-promise/auto';
import 'whatwg-fetch';

// OFFLINE RUNTIME PLUGIN
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

// APP STYLES
import '../css/app.css';

// OFFLINE
OfflinePluginRuntime.install();

// SVG SPRITE
const svgModules = require.context('../img/svg', false, /\.svg$/);
svgModules.keys().forEach(svgModules);
