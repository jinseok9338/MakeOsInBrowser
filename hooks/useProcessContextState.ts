import { useState } from 'react';
import type { ProcessContextState, Processes } from 'types/contexts/process';
import processDirectory from 'utils/processDirectory';

const useProcessContextState = (
  startupProcesses: Processes
): ProcessContextState => {
  const [processes, setProcesses] = useState(processDirectory);

  return { processes };
};

export default useProcessContextState;
