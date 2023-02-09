import messages from '@/common/constants/messages';
import sessions from '@/common/constants/sessions';
import Feature from './components/Feature';
import { MainFeaturesContainer, MainFeaturesSessionContainer } from './styles';

export default function MainFeaturesSession() {
  return (
    <MainFeaturesSessionContainer id={sessions.features}>
      <MainFeaturesContainer>
        <Feature
          imgAlt={messages.homePicAlt}
          imgSrc={'/uau.webp'}
          title={
            <>
              Criação de <mark>mecânicas</mark> e{' '}
              <mark>regras promocionais</mark>
            </>
          }
          description={messages.promotionRulesDescription}
        />
        <Feature
          imgAlt={messages.homePicAlt}
          imgSrc={'/uau.webp'}
          title={
            <>
              Campanhas de <mark>Cuponagem</mark> & <mark>Cashback</mark>
            </>
          }
          reverseFlex
          description={messages.cashbackDescription}
        />
        <Feature
          imgAlt={messages.homePicAlt}
          imgSrc={'/uau.webp'}
          title={
            <>
              Recomendações de <mark>UpSelling</mark>
            </>
          }
          description={messages.clientCommunicationDescription}
        />
      </MainFeaturesContainer>
    </MainFeaturesSessionContainer>
  );
}
