import { useState } from 'react';
import type { ProcessContextState, Processes } from 'types/contexts/process';
// import { getStartupProcesses } from 'utils/processDirectory';
import { Taskbar } from 'utils/processDirectory';

const useProcessContextState = (): ProcessContextState => {
  const [processes /* , setProcesses */] = useState<Processes>({
    Taskbar
  });

  return { processes };
};

export default useProcessContextState;
// test
