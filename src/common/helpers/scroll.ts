import { MouseEvent } from 'react';

export const scrollToSession = (
  e: MouseEvent<any, globalThis.MouseEvent>,
  session: string
) => {
  e.preventDefault();
  let position = document.getElementById(session);
  window.location.href = '#' + session; // changing the url
  position && position.scrollIntoView({ behavior: 'smooth', block: 'start' }); //scrolling the page
};
