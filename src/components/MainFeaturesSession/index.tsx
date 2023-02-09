import messages from '@/common/constants/messages';
import sessions from '@/common/constants/sessions';
import { scrollToSession } from '@/common/helpers/scroll';
import {
  FeatureButton,
  FeatureContainer,
  FeatureContentContainer,
  FeatureDescription,
  FeatureImage,
  FeatureImageBackground,
  FeatureImageContainer,
  FeatureTitle,
  MainFeaturesContainer,
  MainFeaturesSessionContainer,
} from './styles';

export default function MainFeaturesSession() {
  return (
    <MainFeaturesSessionContainer id={sessions.features}>
      <MainFeaturesContainer>
        <FeatureContainer>
          <FeatureImageContainer>
            <FeatureImage
              src="/uau.webp"
              alt={messages.homePicAlt}
              width={300}
              height={309}
            />
          </FeatureImageContainer>

          <FeatureContentContainer>
            <FeatureTitle>
              Criação de <mark>mecânicas</mark> e{' '}
              <mark>regras promocionais</mark>
            </FeatureTitle>
            <FeatureDescription>
              {messages.promotionRulesDescription}
            </FeatureDescription>
            <FeatureButton
              href={`#${sessions.contact}`}
              onClick={(e) => scrollToSession(e, sessions.contact)}
            >
              {messages.speakWithASPecialistButton}
            </FeatureButton>
          </FeatureContentContainer>
        </FeatureContainer>
        <FeatureContainer>
          <FeatureContentContainer>
            <FeatureTitle>
              Campanhas de <mark>Cuponagem</mark> & <mark>Cashback</mark>
            </FeatureTitle>
            <FeatureDescription>
              {messages.cashbackDescription}
            </FeatureDescription>
            <FeatureButton
              href={`#${sessions.contact}`}
              onClick={(e) => scrollToSession(e, sessions.contact)}
            >
              {messages.speakWithASPecialistButton}
            </FeatureButton>
          </FeatureContentContainer>
          <FeatureImageContainer style={{ justifyContent: 'flex-end' }}>
            <FeatureImage
              src="/uau.webp"
              alt={messages.homePicAlt}
              width={300}
              height={309}
            />
          </FeatureImageContainer>
        </FeatureContainer>
        <FeatureContainer>
          <FeatureImageContainer>
            <FeatureImage
              src="/uau.webp"
              alt={messages.homePicAlt}
              width={300}
              height={309}
            />
          </FeatureImageContainer>

          <FeatureContentContainer>
            <FeatureTitle>
              Recomendações de <mark>UpSelling</mark>
            </FeatureTitle>
            <FeatureDescription>
              {messages.clientCommunicationDescription}
            </FeatureDescription>
            <FeatureButton
              href={`#${sessions.contact}`}
              onClick={(e) => scrollToSession(e, sessions.contact)}
            >
              {messages.speakWithASPecialistButton}
            </FeatureButton>
          </FeatureContentContainer>
        </FeatureContainer>
      </MainFeaturesContainer>
    </MainFeaturesSessionContainer>
  );
}
