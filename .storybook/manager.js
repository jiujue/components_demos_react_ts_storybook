// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import mTheme from './mTheme';

addons.setConfig({
  theme: mTheme,
});