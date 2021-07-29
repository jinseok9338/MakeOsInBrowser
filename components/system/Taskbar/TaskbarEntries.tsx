import TaskbarEntry from 'components/system/Taskbar/TaskbarEntry';
import type { FC } from 'react';
import StyledTaskbarEntries from 'styles/components/system/StyledTaskbarEntries';
// Todo: Taskbar entries to loop through

const TaskbarEntries: FC = () => (
  <StyledTaskbarEntries>
    <TaskbarEntry />
  </StyledTaskbarEntries>
);

export default TaskbarEntries;
