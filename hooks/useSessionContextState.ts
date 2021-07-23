import type { SessionContextState } from 'types/contexts/session';

const userSetTheme = undefined;

const useSessionContextState = (): SessionContextState => ({
  theme: userSetTheme
});

export default useSessionContextState;
