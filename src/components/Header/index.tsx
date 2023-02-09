import messages from '@/common/constants/messages';
import sessions from '@/common/constants/sessions';
import { scrollToSession } from '@/common/helpers/scroll';
import { sessionState } from '@/common/state/session';
import Image from 'next/image';
import { HEADER_LINKS } from './constants';
import {
  HeaderButton,
  HeaderContainer,
  HeaderContent,
  HeaderLink,
} from './styles';

export default function Header() {
  const currentSession = sessionState.get({ noproxy: true });
  return (
    <header>
      <HeaderContainer>
        <HeaderContent>
          <Image
            src="/logo.webp"
            alt={messages.logoAlt}
            width={190}
            height={44}
          />
          {HEADER_LINKS.map((link, index) => {
            const isSelected = link.session === currentSession;
            return (
              <HeaderLink
                href={`#${link.session}`}
                key={`${index} - ${link.text}`}
                isSelected={isSelected}
                onClick={(e) => scrollToSession(e, link.session)}
              >
                {link.text}
              </HeaderLink>
            );
          })}
        </HeaderContent>
        <HeaderButton
          href={`#${sessions.contact}`}
          onClick={(e) => scrollToSession(e, sessions.contact)}
        >
          {messages.headerButton}
        </HeaderButton>
      </HeaderContainer>
    </header>
  );
}
