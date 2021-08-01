import 'styled-components';

import type { wallpaperEffect } from 'types/styles/wallpaper';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundcolor: string;
      primary: string;
      window: string;
    };
    sizes: {
      clock: {
        width: string;
      };
      startbutton: {
        width: string;
      };
      taskbar: {
        height: string;
        width: string;
        entry: {
          width: string;
        };
      };
    };
    wallpaper?: wallpaperEffect;
  }
}
