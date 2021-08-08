/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { DefaultTheme } from 'styled-components';
import vantaWaves from 'utils/vantaWaves';

const colors = {
  text: 'rgba(255, 255, 255, 90%)',
  backgroundcolor: '#000',
  primary: '#000',
  startbutton: '#FFF',
  highlight: 'hsl(207deg 100% 72% / 90%)',
  taskbar: {
    active: 'hsla(0, 0%, 20%, 70%)',
    hover: 'hsla(0, 0%, 25%, 70%)',
    foreground: 'hsla(0, 0%, 35%, 70%)'
  },
  window: '#808080',
  clockText: 'rgba(255, 255, 255, 80%)'
};

const sizes = {
  clock: {
    width: '76px',
    fontSize: '12px'
  },
  startbutton: {
    iconSize: '19px',
    width: '36px'
  },
  taskbar: {
    blur: '5px',
    height: '30px',
    width: '100vw',
    entry: {
      maxwidth: '161px',
      borderSize: '2px',
      fontSize: '12px',
      icon: {
        size: '16px'
      }
    }
  }
};

export const formats = {
  date: {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  } as Intl.DateTimeFormatOptions,
  time: {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  } as Intl.DateTimeFormatOptions
};

const wallpaper = vantaWaves({
  color: 0x3d3d69,
  shiness: 35,
  waveHeight: 15,
  waveSpeed: 0.3,
  zoom: 0.9
});

const defaultTheme: DefaultTheme = {
  colors,
  sizes,
  // fonts,
  wallpaper,
  formats
};

export default defaultTheme;
