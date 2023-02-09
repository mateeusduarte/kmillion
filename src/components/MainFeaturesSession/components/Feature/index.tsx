import messages from '@/common/constants/messages';
import sessions from '@/common/constants/sessions';
import { scrollToSession } from '@/common/helpers/scroll';
import useIsRefVisible from '@/common/hooks/use-is-ref-visible';
import {
  FeatureButton,
  FeatureContainer,
  FeatureContentContainer,
  FeatureDescription,
  FeatureImage,
  FeatureImageContainer,
  FeatureTitle,
} from '../../styles';

type TFeatureProps = {
  imgSrc: string;
  imgAlt: string;
  title: React.ReactNode;
  description: string;
  reverseFlex?: boolean;
};
export default function Feature({
  imgSrc,
  imgAlt,
  title,
  description,
  reverseFlex = false,
}: TFeatureProps) {
  const { isVisible, ref } = useIsRefVisible();

  return (
    <FeatureContainer>
      {!reverseFlex && (
        <FeatureImageContainer>
          <FeatureImage src={imgSrc} alt={imgAlt} width={300} height={309} />
        </FeatureImageContainer>
      )}

      <FeatureContentContainer>
        <FeatureTitle ref={ref} isVisible={isVisible}>
          {title}
        </FeatureTitle>
        <FeatureDescription>{description}</FeatureDescription>
        <FeatureButton
          href={`#${sessions.contact}`}
          onClick={(e) => scrollToSession(e, sessions.contact)}
        >
          {messages.speakWithASPecialistButton}
        </FeatureButton>
      </FeatureContentContainer>
      {reverseFlex && (
        <FeatureImageContainer style={{ justifyContent: 'flex-end' }}>
          <FeatureImage src={imgSrc} alt={imgAlt} width={300} height={309} />
        </FeatureImageContainer>
      )}
    </FeatureContainer>
  );
}
