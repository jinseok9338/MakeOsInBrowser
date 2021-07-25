import 'styled-components';

import type { wallpaperEffect } from 'types/styles/wallpaper';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundcolor: string;
      primary: string;
      window: string;
    };
    wallpaper: wallpaperEffect;
  }
}
