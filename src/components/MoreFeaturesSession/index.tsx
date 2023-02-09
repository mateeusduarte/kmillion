import messages from '@/common/constants/messages';
import sessions from '@/common/constants/sessions';
import SingleFeature from './components/SingleFeature';
import {
  MoreFeaturesCarousel,
  MoreFeaturesContainer,
  MoreFeaturesSessionContainer,
  MoreFeaturesTitle,
} from './styles';

export default function MoreFeaturesSession() {
  return (
    <MoreFeaturesSessionContainer id={sessions.features}>
      <MoreFeaturesContainer>
        <MoreFeaturesTitle>{messages.moreFeaturesTitle}</MoreFeaturesTitle>
        <MoreFeaturesCarousel>
          <SingleFeature
            src="/monitor.png"
            alt={messages.computerIconAlt}
            title={messages.centralizationTitle}
            description={messages.centralizationDescription}
          />
          <SingleFeature
            src={'/integration.png'}
            alt={messages.integrationIconAlt}
            title={messages.integrationTitle}
            description={messages.integrationDescription}
          />
          <SingleFeature
            src={'/online-money.png'}
            alt={messages.moneyOnlineIconAlt}
            title={messages.crossRetailersTitle}
            description={messages.crossRetailersDescription}
          />
          <SingleFeature
            src={'/simulator.png'}
            alt={messages.simulatorIconAlt}
            title={messages.simulatorTitle}
            description={messages.simulatorDescription}
          />
          <SingleFeature
            src={'/cloud.png'}
            alt={messages.cloudIconAlt}
            title={messages.portabilityTitle}
            description={messages.portabilityDescription}
          />
        </MoreFeaturesCarousel>
      </MoreFeaturesContainer>
    </MoreFeaturesSessionContainer>
  );
}
