import Image from 'next/image';
import {
  SingleFeatureContainer,
  SingleFeatureDescription,
  SingleFeatureTitle,
} from '../../styles';

type TSingleFeatureProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
};
export default function SingleFeature({
  src,
  alt,
  title,
  description,
}: TSingleFeatureProps) {
  return (
    <SingleFeatureContainer>
      <Image src={src} alt={alt} width={50} height={50} />
      <SingleFeatureTitle>{title}</SingleFeatureTitle>
      <SingleFeatureDescription>{description}</SingleFeatureDescription>
    </SingleFeatureContainer>
  );
}
