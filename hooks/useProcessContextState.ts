import { useState } from 'react';
import type { ProcessContextState, Processes } from 'types/contexts/process';
import ProcessDirectory from 'utils/processDirectory';

const closeProcess =
  (processId: string) =>
  ({ [processId]: _closedProcess, ...remainingProcesses }) =>
    remainingProcesses;

const openProcess = (processId: string) => (currentProcesses: Processes) =>
  currentProcesses[processId]
    ? currentProcesses
    : {
        ...currentProcesses,
        [processId]: ProcessDirectory[processId]
      };

const useProcessContextState = (): ProcessContextState => {
  const [processes, setProcesses] = useState<Processes>({});
  const close = (processId: string) => setProcesses(closeProcess(processId));
  const open = (processId: string) => setProcesses(openProcess(processId));

  return { processes };
};

export default useProcessContextState;
