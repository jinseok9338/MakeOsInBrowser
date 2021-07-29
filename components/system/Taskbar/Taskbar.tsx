import Clock from 'components/system/Taskbar/Clock';
import StartButton from 'components/system/Taskbar/StartButton';
import TaskbarEntries from 'components/system/Taskbar/TaskbarEntries';
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
