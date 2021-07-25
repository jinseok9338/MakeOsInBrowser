import useProcessContextState from 'hooks/useProcessContextState';
import type { FC } from 'react';
import { createContext } from 'react';
import type { ProcessContextState } from 'types/contexts/process';
import { initialProcessContextState } from 'utils/initialContextStates';

const { Consumer, Provider } = createContext<ProcessContextState>(
  initialProcessContextState
);

export const ProcessProvider: FC = ({ children }) => (
  <Provider value={useProcessContextState()}>{children}</Provider>
);

export const ProcessConsumer = Consumer;
