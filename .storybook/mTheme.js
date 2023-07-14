// .storybook/YourTheme.js
import pkg from '../package.json';

import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: pkg?.title,
  // brandUrl: 'https://example.com',
  // brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',
});