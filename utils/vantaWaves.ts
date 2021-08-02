import * as THREE from 'three';
import type { wallpaperEffect } from 'types/styles/wallpaper';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import WAVES from 'vanta/dist/vanta.waves.min';

export type VantaWavesSettings = {
  color: number;
  shiness: number;
  waveHeight: number;
  waveSpeed: number;
  zoom: number;
};

const disableControls = {
  mouseControls: false,
  touchControls: false
};

const hasWebGLContext = typeof WebGLRenderingContext !== 'undefined';

const vantaWaves =
  (settings: VantaWavesSettings): wallpaperEffect =>
  (el) => {
    const vantaEffect =
      hasWebGLContext && el
        ? WAVES({
            el,
            THREE,
            ...disableControls,
            ...settings
          })
        : undefined;

    return () => {
      vantaEffect?.destroy?.();
    };
  };

export default vantaWaves;
