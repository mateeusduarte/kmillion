import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export const MainFeaturesSessionContainer = styled.div`
  display: flex;
  justify-content: center;
  scroll-behavior: smooth;
  background: white;
  width: 100%;
`;

export const MainFeaturesContainer = styled.div`
  min-height: 650px;
  width: 60%;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 60px 20px 60px;
`;

export const FeatureContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%; ;
`;

export const FeatureImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const FeatureImageBackground = styled.div`
  background: #eb9c52;
  width: 350px;
  height: 350px;
  position: relative;
  left: -24px;
  border-radius: 800px;
`;
export const FeatureImage = styled(Image)``;

export const FeatureTitle = styled.h2`
  mark {
    -webkit-animation: 1.5s highlight 1.5s 1 normal forwards;
    animation: 1.5s highlight 1.5s 1 normal forwards;
    background-color: none;
    background: linear-gradient(90deg, #eb9c52 50%, rgba(255, 255, 255, 0) 50%);
    background-size: 200% 100%;
    background-position: 100% 0;
    color: #606060;
  }
  @-webkit-keyframes highlight {
    to {
      background-position: 0 0;
    }
  }

  @keyframes highlight {
    to {
      background-position: 0 0;
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
