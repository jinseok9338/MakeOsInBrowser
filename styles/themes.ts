import type Themes from 'types/styles/themes';
import vantaWaves from 'utils/vantaWaves';

const defaultTheme = {
  colors: {
    backgroundcolor: '#000',
    primary: '#000',
    window: '#808080'
  },
  wallpaper: vantaWaves({
    color: 0x3d3d69,
    shiness: 35,
    waveHeight: 15,
    waveSpeed: 0.3,
    zoom: 0.9
  })
};

const themes: Themes = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  defaultTheme
};

export default themes;
