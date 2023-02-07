import messages from '@/common/constants/messages';
import sessions from '@/common/constants/sessions';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { HEADER_LINKS } from './constants';
import {
  HeaderButton,
  HeaderContainer,
  HeaderContent,
  HeaderLink,
} from './styles';

export default function Header() {
  const router = useRouter();
  const [currentSession, setCurrentSession] = useState(() =>
    router.asPath.substring(2)
  );

  useEffect(() => {
    setCurrentSession(router.asPath.substring(2));
  }, [router.asPath, router]);

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
                onClick={() => setCurrentSession(link.session)}
              >
                {link.text}
              </HeaderLink>
            );
          })}
        </HeaderContent>
        <HeaderButton
          href={`#${sessions.contact}`}
          onClick={() => setCurrentSession(sessions.contact)}
        >
          {messages.headerButton}
        </HeaderButton>
      </HeaderContainer>
    </header>
  );
}
