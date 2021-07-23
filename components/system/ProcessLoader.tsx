import { ProcessConsumer } from 'contexts/process';
import dynamic from 'next/dynamic';
import type { FC } from 'react';
import type { Process, Processes } from 'types/contexts/process';

const Window = dynamic(() => import('components/system/Window'));

const RenderProcess: FC<Process> = ({ Component, hasWindow }) =>
  hasWindow ? (
    <Window>
      <Component />
    </Window>
  ) : (
    <Component />
  );

const RenderProcesses: FC<{ processes: Processes }> = ({ processes }) => (
  <>
    {Object.entries(processes).map(([id, process]) => (
      <RenderProcess key={id} {...process} />
    ))}
  </>
);

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    {({ processes }) => <RenderProcesses processes={processes} />}
  </ProcessConsumer>
);

export default ProcessLoader;
