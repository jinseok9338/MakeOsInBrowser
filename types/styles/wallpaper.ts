import type { RefObject } from 'react';

export type VantaWavesSettings = {
  color: number;
  shiness: number;
  waveHeight: number;
  waveSpeed: number;
  zoom: number;
};

export type wallpaperEffect = (
  settings: VantaWavesSettings
) => (desktopRef: RefObject<HTMLElement>) => () => void;
