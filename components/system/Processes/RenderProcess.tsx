import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

const Window = dynamic(() => import('components/system/Window'));

const withWindow = (Component: ComponentType) => (
  <Window>
    <Component />
  </Window>
);

type RenderProcessProps = {
  Component: ComponentType;
  hasWindow: boolean;
};

const RenderProcess = ({
  Component,
  hasWindow
}: RenderProcessProps): JSX.Element =>
  hasWindow ? withWindow(Component) : <Component />;

export default RenderProcess;
