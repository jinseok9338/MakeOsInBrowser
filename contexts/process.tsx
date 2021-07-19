import type { FC } from 'react';
import { createContext } from 'react';
import processDirectory from 'utils/processDirectory';

const ProcessContext = createContext({});

const ProcessLoader: FC = () => (
  <>
    {Object.entries(processDirectory).map(([id, { Component }]) => (
      <Component key={id} />
    ))}
  </>
);

export default ProcessLoader;
