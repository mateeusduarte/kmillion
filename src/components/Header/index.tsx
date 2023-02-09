import messages from '@/common/constants/messages';
import sessions from '@/common/constants/sessions';
import { scrollToSession } from '@/common/helpers/scroll';
import Image from 'next/image';
import { MouseEvent } from 'react';
import { HEADER_LINKS } from './constants';
import {
  HeaderButton,
  HeaderContainer,
  HeaderContent,
  HeaderLink,
} from './styles';

type THeaderProps = {
  session: string;
  onScroll: (session: string) => void;
};
export default function Header({ session, onScroll }: THeaderProps) {
  const handleScroll = (
    e: MouseEvent<any, globalThis.MouseEvent>,
    session: string
  ) => {
    scrollToSession(e, session);
    onScroll(session);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Image
          src="/logo.webp"
          alt={messages.logoAlt}
          width={190}
          height={44}
        />
        {HEADER_LINKS.map((link, index) => {
          const isSelected = link.session === session;
          return (
            <HeaderLink
              href={`#${link.session}`}
              key={`${index} - ${link.text}`}
              isSelected={isSelected}
              onClick={(e) => handleScroll(e, link.session)}
            >
              {link.text}
            </HeaderLink>
          );
        })}
      </HeaderContent>
      <HeaderButton
        href={`#${sessions.contact}`}
        onClick={(e) => handleScroll(e, sessions.contact)}
      >
        {messages.headerButton}
      </HeaderButton>
    </HeaderContainer>
  );
}
