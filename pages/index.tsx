import Desktop from 'components/system/Desktop';
import ProcessLoader from 'components/system/Processes/ProcessLoader';
import { FileSystemConsumer } from 'contexts/fileSystem';
import { ProcessProvider } from 'contexts/process';
import type { ReactElement } from 'react';

const Home = (): ReactElement => (
  <Desktop>
    <ProcessProvider>
      <ProcessLoader />
    </ProcessProvider>
  </Desktop>
);

export default Home;
