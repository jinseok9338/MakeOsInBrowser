import Clock from 'components/system/Taskbar/Clock/index';
import StartButton from 'components/system/Taskbar/StartButton';
import TaskbarEntries from 'components/system/Taskbar/TaskbarEntries';
import StyledTaskbar from 'styles/components/system/StyledTaskbar';

const Taskbar = (): JSX.Element => (
  <StyledTaskbar>
    <StartButton />
    <TaskbarEntries />
    <Clock />
  </StyledTaskbar>
);

export default Taskbar;
