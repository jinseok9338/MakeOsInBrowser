import WAVES from 'libs/vanta.waves.min';
import type { RefObject } from 'react';
import { useEffect } from 'react';
import * as THREE from 'three';

const useWallpaper = (refElement: RefObject<HTMLElement>): void => {
  useEffect(() => {
    const vantaEffect = WAVES({
      el: refElement.current,
      THREE
    });

    return () => {
      vantaEffect.destroy();
    };
  }, [refElement]);
};

export default useWallpaper;
