import breakpoints from '@/common/constants/breakpoints';
import styled from 'styled-components';

export const MoreFeaturesSessionContainer = styled.div`
  display: flex;
  justify-content: center;
  scroll-behavior: smooth;
  background: #f3f2f2;
  width: 100%;
  padding: 50px 0;
`;

export const MoreFeaturesContainer = styled.div`
  min-height: 300px;
  width: 70%;
  background: #f3f2f2;
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-top: 30px;
  flex-wrap: wrap;
  @media only screen and ${breakpoints.device.cel} {
    width: 100%;
  }
  @media only screen and ${breakpoints.device.tablet} {
    width: 100%;
  }
`;

export const MoreFeaturesTitle = styled.h1`
  font-size: 40px;
  text-align: center;
  color: #606060;
  margin: 0;
`;

export const MoreFeaturesCarousel = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 25%;
  @media only screen and ${breakpoints.device.cel} {
    flex-direction: column;
    justify-content: center;
    gap: 50px;
  }
`;

export const SingleFeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
  width: 25%;
  @media only screen and ${breakpoints.device.cel} {
    width: 100%;
  }
`;

export const SingleFeatureTitle = styled.h2`
  color: #b66315;
  text-align: center;
  max-width: 70%;
  @media only screen and ${breakpoints.device.cel} {
    max-width: 100%;
  }
`;

export const SingleFeatureDescription = styled.p`
  color: #606060;
  text-align: center;
  max-width: 80%;
  @media only screen and ${breakpoints.device.cel} {
    display: none;
  }
`;
