import messages from '@/common/constants/messages';
import sessions from '@/common/constants/sessions';
import { scrollToSession } from '@/common/helpers/scroll';
import {
  HomeButton,
  HomeContainer,
  HomeContentContainer,
  HomeDescription,
  HomeImage,
  HomeImageContainer,
  HomeSessionContainer,
  HomeTitle,
} from './styles';

export default function HomeSession() {
  return (
    <HomeSessionContainer id={sessions.home}>
      <HomeContainer>
        <HomeContentContainer>
          <HomeTitle>{messages.homeTitle}</HomeTitle>
          <HomeDescription>{messages.homeDescription}</HomeDescription>
          <HomeButton
            href={`#${sessions.contact}`}
            onClick={(e) => scrollToSession(e, sessions.contact)}
          >
            Experimente agora!
          </HomeButton>
        </HomeContentContainer>
        <HomeImageContainer>
          <HomeImage
            src="/home-pic.png"
            alt={messages.homePicAlt}
            width={473}
            height={615}
          />
        </HomeImageContainer>
      </HomeContainer>
    </HomeSessionContainer>
  );
}
