import sessions from '@/common/constants/sessions';
import { hookstate } from '@hookstate/core';

export const sessionState = hookstate(sessions.home);

export const changeSession = (session: string): void => {
  sessionState.set(session);
  console.log(sessionState.get({ noproxy: true }));
};
