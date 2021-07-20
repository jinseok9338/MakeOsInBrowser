import type { SessionContextState } from 'types/contexts/session';

const userSetTheme = undefined;

const useSessionContextState = (): SessionContextState => ({
  theme: userSetTheme // TODO: Load user Theme from localStorage
});

export default useSessionContextState;
