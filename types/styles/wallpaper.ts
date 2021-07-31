export type VantaWavesSettings = {
  color: number;
  shiness: number;
  waveHeight: number;
  waveSpeed: number;
  zoom: number;
};

export type wallpaperEffect = (
  settings: VantaWavesSettings
) => (element?: HTMLElement) => () => void;
