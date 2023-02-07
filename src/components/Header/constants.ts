import messages from '@/common/constants/messages';
import sessions from '@/common/constants/sessions';
import { THeaderLinks } from './types';

export const HEADER_LINKS: THeaderLinks[] = [
  {
    session: sessions.home,
    text: messages.homeHeaderLink,
  },
  {
    session: sessions.aboutUs,
    text: messages.aboutUsHeaderLink,
  },
  {
    session: sessions.numbers,
    text: messages.numbersHeaderLink,
  },
  {
    session: sessions.features,
    text: messages.featuresHeaderLink,
  },
  {
    session: sessions.contact,
    text: messages.contactHeaderLink,
  },
];
