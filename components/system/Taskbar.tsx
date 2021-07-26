import Clock from 'components/system/Clock';
import StartButton from 'components/system/StartButton';
import TaskbarEntries from 'components/system/TaskbarEntries';
import type { FC } from 'react';
import StyledTaskbar from 'styles/components/system/StyledTaskbar';

const Taskbar: FC = () => (
  <StyledTaskbar>
    <StartButton />
    <TaskbarEntries />
    <Clock />
  </StyledTaskbar>
);

export default Taskbar;
