import WindowManager from 'components/system/ProcessLoader';
import { ProcessProvider } from 'contexts/process';
import type { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <ProcessProvider>
      <WindowManager />
    </ProcessProvider>
  );
}
