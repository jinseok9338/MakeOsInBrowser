import 'styled-components';

import type { formats } from 'styles/defaultTheme';
import type { wallpaperEffect } from 'types/styles/wallpaper';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      backgroundcolor: string;
      primary: string;
      startbutton: string;
      taskbar: {
        active?: string;
        activeForeground?: string;
        background?: string;
        foreground?: string;
        foregroundHover?: string;
        hover?: string;
        peekBorder?: string;
      };
      window: string;
      clockText: string;
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
    formats: typeof formats;
  }
}
