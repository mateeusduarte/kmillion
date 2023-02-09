import useIsRefVisible from '@/common/hooks/use-is-ref-visible';
import {
  NumberCircleBackgroundTiltLeft,
  NumberCircleBackgroundTiltRight,
  NumberCircleContainer,
  NumberCircleDescription,
  NumberCircleTitle,
} from '../../styles';

type TNumberCircleProps = {
  tilt: 'left' | 'right';
  title: string;
  description: React.ReactNode;
};
export default function NumberCircle({
  tilt,
  title,
  description,
}: TNumberCircleProps) {
  const { isVisible, ref } = useIsRefVisible();
  return (
    <NumberCircleContainer ref={ref}>
      {tilt === 'left' && (
        <NumberCircleBackgroundTiltLeft isVisible={isVisible}>
          <NumberCircleTitle>{title}</NumberCircleTitle>
        </NumberCircleBackgroundTiltLeft>
      )}
      {tilt === 'right' && (
        <NumberCircleBackgroundTiltRight isVisible={isVisible}>
          <NumberCircleTitle>{title}</NumberCircleTitle>
        </NumberCircleBackgroundTiltRight>
      )}
      <NumberCircleDescription isVisible={isVisible}>
        {description}
      </NumberCircleDescription>
    </NumberCircleContainer>
  );
}
