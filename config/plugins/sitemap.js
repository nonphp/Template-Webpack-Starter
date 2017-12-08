import SitemapPlugin from 'sitemap-webpack-plugin';

import { ROOT, PATHS, PACKAGE, SITEMAP_PATHS } from '../config';

const sitemap = new SitemapPlugin(PACKAGE.homepage, SITEMAP_PATHS, {
  lastMod: true,
  changeFreq: 'monthly',
  priority: '0.4'
});

export { sitemap };
