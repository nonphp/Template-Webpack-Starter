// promise & fetch polyfills
import 'es6-promise/auto';
import 'whatwg-fetch';

// offline runtime
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

// baseline app styles
import '../css/app.css';

OfflinePluginRuntime.install();
