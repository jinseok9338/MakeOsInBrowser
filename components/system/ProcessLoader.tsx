import Window from 'components/system/Window';
import { ProcessConsumer } from 'contexts/process';
import type { FC } from 'react';
import type { Process, Processes } from 'types/contexts/process';

// DO I need key ={id} ? Add Linting rule to catch key required

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
    {Object.entries(processes).map(([id, { Component, hasWindow }]) => (
      <RenderProcess key={id} Component={Component} hasWindow={hasWindow} />
    ))}
  </>
);

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    {({ processes }) => <RenderProcesses processes={processes} />}
  </ProcessConsumer>
);

export default ProcessLoader;
