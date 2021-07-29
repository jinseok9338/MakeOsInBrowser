import RenderProcess from 'components/system/Processes/RenderProcess';
import { ProcessConsumer } from 'contexts/process';
import type { FC } from 'react';
import type { Processes } from 'types/contexts/process';

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
