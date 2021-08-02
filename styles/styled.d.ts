import 'styled-components';

import type { wallpaperEffect } from 'types/styles/wallpaper';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundcolor: string;
      primary: string;
      startbutton: string;
      taskbar: string;
      window: string;
    };
    sizes: {
      clock: {
        fontSize: string;
        width: string;
      };
      startbutton: {
        iconSize: string;
        width: string;
      };
      taskbar: {
        height: string;
        width: string;
        blur: string;
        entry: {
          maxwidth: string;
        };
      };
    };
    wallpaper?: wallpaperEffect;
  }
}
