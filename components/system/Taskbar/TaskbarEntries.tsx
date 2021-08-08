import TaskbarEntry from 'components/system/Taskbar/TaskbarEntry';
import { ProcessConsumer } from 'contexts/process';
import type { FC } from 'react';
import StyledTaskbarEntries from 'styles/components/system/StyledTaskbarEntries';

const TaskbarEntries: FC = () => (
  <StyledTaskbarEntries>
    <ProcessConsumer>
      {({ processes }) =>
        Object.entries(processes).map(([id, { icon, title }]) => (
          <TaskbarEntry key={id} icon={icon} title={title} />
        ))
      }
    </ProcessConsumer>
  </StyledTaskbarEntries>
);

export default TaskbarEntries;
