/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { DefaultTheme } from 'styled-components';
import vantaWaves from 'utils/vantaWaves';

const colors = {
  backgroundcolor: '#000',
  primary: '#000',
  window: '#808080'
};

const sizes = {
  clock: {
    width: '90px'
  },
  startbutton: {
    width: '30px'
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
  // @ts-expect-error
  wallpaper
};

export default defaultTheme;
