import Desktop from 'components/system/Desktop';
import ProcessLoader from 'components/system/Processes/ProcessLoader';
import { ProcessProvider } from 'contexts/process';
import type { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <Desktop>
      <ProcessProvider>
        <ProcessLoader />
      </ProcessProvider>
    </Desktop>
  );
}
