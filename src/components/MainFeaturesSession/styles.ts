import { TFeatureTitleProps } from './types';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import breakpoints from '@/common/constants/breakpoints';

export const MainFeaturesSessionContainer = styled.div`
  display: flex;
  justify-content: center;
  scroll-behavior: smooth;
  background: white;
  width: 100%;
`;

export const MainFeaturesContainer = styled.div`
  min-height: 650px;
  width: 70%;
  background: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 60px;
  @media only screen and ${breakpoints.device.cel} {
    width: 100%;
  }
  @media only screen and ${breakpoints.device.tablet} {
    width: 100%;
  }
`;

export const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 0px 20px 60px;
  width: 80%;
  @media only screen and ${breakpoints.device.cel} {
    padding: 60px 10px;
    width: 100%;
  }
  @media only screen and ${breakpoints.device.tablet} {
    padding: 60px 10px;
    width: 100%;
  }
`;

export const FeatureContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 10px;
  width: 50%;
  @media only screen and ${breakpoints.device.cel} {
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  @media only screen and ${breakpoints.device.tablet} {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const FeatureImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and ${breakpoints.device.cel} {
    display: none;
  }
  @media only screen and ${breakpoints.device.tablet} {
    display: none;
  }
`;
export const FeatureImageBackground = styled.div`
  background: #eb9c52;
  width: 350px;
  height: 350px;
  position: relative;
  left: -24px;
  border-radius: 80px;
`;
export const FeatureImage = styled(Image)``;

export const FeatureTitle = styled.h2<TFeatureTitleProps>`
  mark {
    -webkit-animation: ${({ isVisible }) =>
      isVisible && ' 1s highlight 1s 1 normal forwards'};
    animation: ${({ isVisible }) =>
      isVisible && ' 1s highlight 1s 1 normal forwards'};
    background-color: none;
    background: linear-gradient(90deg, #eb9c52 50%, rgba(255, 255, 255, 0) 50%);
    background-size: 200% 100%;
    background-position: 100% 0;
    color: #606060;
  }
  @-webkit-keyframes highlight {
    to {
      background-position: 0 0;
      color: white;
      padding: 0 10px;
    }
  }

  @keyframes highlight {
    to {
      background-position: 0 0;
      color: white;
      padding: 0 10px;
    }
  }
  color: #606060;

  font-size: 33px;
`;

export const FeatureDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #606060;
  margin: 0;
`;

export const FeatureButton = styled(Link)`
  padding: 16px 36px;
  font-size: 15px;
  border-radius: 30px;
  width: fit-content;
  font-weight: 700;
  background-color: #eb9c52;
  color: white;
  white-space: nowrap;
  border: none;
  outline: none;
  box-shadow: 0 3px 6px #00000029;
  text-decoration: none;
  margin-top: 20px;
  cursor: pointer;
  :hover {
    background-color: #b66315;
  }
  transition: background-color 0.2s ease-out, color 0.2s ease-out;
`;
