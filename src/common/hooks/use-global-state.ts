import { State, Immutable } from '@hookstate/core';

function useGlobalState<T>(nativeState: State<T>): { state: Immutable<T> } {
  const state = nativeState.get({ noproxy: true });

  return { state };
}

export default useGlobalState;
