import fs from "fs";
import path from "path";
import webpack from "webpack";
import { NODE_ENV, ROOT, PATHS, BANNER } from "../config";

const define = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(NODE_ENV === "development"),
  __PRODUCTION__: JSON.stringify(NODE_ENV === "production")
});

const HMR = new webpack.HotModuleReplacementPlugin();

const namedModules = new webpack.NamedModulesPlugin();

const hashedModuleIds = new webpack.HashedModuleIdsPlugin();

const banner = new webpack.BannerPlugin({
  banner: BANNER,
  raw: false,
  entryOnly: false
});

export {
  define,
  HMR,
  namedModules,
  hashedModuleIds,
  banner,
  messages
};
