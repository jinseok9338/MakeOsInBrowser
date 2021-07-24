import useProcessContextState from 'hooks/useProcessContextState';
import type { FC } from 'react';
import { createContext } from 'react';
import type {
  ProcessContextState,
  ProcessProviderProps
} from 'types/contexts/process';
import { initialProcessContextState } from 'utils/initialContextStates';
import { getStartupProcesses } from 'utils/processDirectory';

const { Consumer, Provider } = createContext<ProcessContextState>(
  initialProcessContextState
);

export const ProcessProvider: FC<ProcessProviderProps> = ({ children }) => (
  <Provider value={useProcessContextState(getStartupProcesses())}>
    {children}
  </Provider>
);

export const ProcessConsumer = Consumer;
