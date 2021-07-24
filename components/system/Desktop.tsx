import useWallpaper from 'hooks/useWallpaper';
import type { FC } from 'react';
import { useRef } from 'react';
import StyledDesktop from 'styles/components/system/StyledWindow';

const Desktop: FC = ({ children }) => {
  const desktopRef = useRef<HTMLElement>(null);

  useWallpaper(desktopRef);
  return <StyledDesktop>{children}</StyledDesktop>;
};

export default Desktop;
