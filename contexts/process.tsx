import useProcessContextState from 'hooks/useProcessContextState';
import type { ProcessContextState } from 'types/contexts/process';
import contextFactory from 'utils/contextFactory';
import { initialProcessContextState } from 'utils/initialContextStates';

const { Consumer, Provider, useContext } = contextFactory<ProcessContextState>(
  initialProcessContextState,
  useProcessContextState
);

export {
  Consumer as ProcessConsumer,
  Provider as ProcessProvider,
  useContext as useProcesses
};
