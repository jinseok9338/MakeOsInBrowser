import Desktop from 'components/system/Desktop';
import ProcessLoader from 'components/system/Processes/ProcessLoader';
import Taskbar from 'components/system/Taskbar/Taskbar';
import { FileSystemConsumer } from 'contexts/fileSystem';
import { ProcessProvider } from 'contexts/process';
import type { ReactElement } from 'react';

const Home = (): ReactElement => (
  <Desktop>
    <ProcessProvider>
      <Taskbar />
      <ProcessLoader />
    </ProcessProvider>
  </Desktop>
);

export default Home;
