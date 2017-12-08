import { html, pug } from "./loaders/markup";
import { scripts } from "./loaders/scripts";
import { styles, fonts } from "./loaders/styles";
import { images, svg } from "./loaders/images";

export default [
  html,
  pug,
  scripts,
  styles,
  fonts,
  images,
  svg
];
