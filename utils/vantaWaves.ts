import type { RefObject } from 'react';
import * as THREE from 'three';
import type {
  VantaWavesSettings,
  wallpaperEffect
} from 'types/styles/wallpaper';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import WAVES from 'vanta/dist/vanta.waves.min';

const disableControls = {
  mouseControls: false,
  touchControls: false
};

const hasWebGLContext = typeof WebGLRenderingContext !== 'undefined';

const vantaWaves: wallpaperEffect =
  (settings: VantaWavesSettings) => (desktopRef: RefObject<HTMLElement>) => {
    const vantaEffect = hasWebGLContext
      ? WAVES({
          el: desktopRef.current,
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
