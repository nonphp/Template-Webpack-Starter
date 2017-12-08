import CleanWebpackPlugin from 'clean-webpack-plugin';

import { PATHS, ROOT } from "../config";

let pathsToClean = [
  `${PATHS.get("dist")}`
]

let cleanOptions = {
  root: ROOT,
  verbose: false,
  dry: false
}

const clean = new CleanWebpackPlugin(pathsToClean, cleanOptions);

export { clean };

