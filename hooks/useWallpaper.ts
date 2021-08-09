import type { RefObject } from 'react';
import { useEffect } from 'react';
import { useTheme } from 'styled-components';

const useWallpaper = (desktopRef: RefObject<HTMLElement> | null): void => {
  const { wallpaper } = useTheme();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useEffect(() => wallpaper?.(desktopRef.current), [desktopRef, wallpaper]);
};

export default useWallpaper;
