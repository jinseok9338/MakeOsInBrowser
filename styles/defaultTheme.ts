/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { DefaultTheme } from 'styled-components';
import vantaWaves from 'utils/vantaWaves';

const colors = {
  backgroundcolor: '#000',
  primary: '#000',
  taskbar: 'rgba(0, 0, 0, 60%)',
  window: '#808080'
};

const fonts = {
  clock: {
    size: '12px'
  }
};

const sizes = {
  clock: {
    width: '76px'
  },
  startbutton: {
    width: '36px'
  },
  taskbar: {
    blur: '5px',
    height: '30px',
    width: '100vw',
    entry: {
      maxwidth: '161px'
    }
  }
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
  fonts,
  wallpaper
};

export default defaultTheme;
