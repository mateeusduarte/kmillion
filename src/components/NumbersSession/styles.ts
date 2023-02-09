import breakpoints from '@/common/constants/breakpoints';
import styled from 'styled-components';
import {
  TNumberCircleBackgroundProps,
  TNumberCircleDescriptionProps,
} from './types';

export const NumbersSessionContainer = styled.div`
  display: flex;
  justify-content: center;
  scroll-behavior: smooth;
  background: white;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 0;
`;

export const NumbersContainer = styled.div`
  min-height: 200px;
  width: 60%;
  background: white;
  @media only screen and ${breakpoints.device.cel} {
    flex-wrap: wrap;
  }
  @media only screen and ${breakpoints.device.tablet} {
    flex-wrap: wrap;
  }
  display: flex;
  gap: 60px;
  padding: 40px 0;
`;

export const NumberCircleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;
const NumberCircleBackgroundBase = styled.div`
  border-radius: 121px;
  width: 167px;
  height: 167px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3f3d3d;
  text-align: center;
`;
export const NumberCircleBackgroundTiltLeft = styled(
  NumberCircleBackgroundBase
)<TNumberCircleBackgroundProps>`
  transform: rotate(-10deg);

  animation: ${({ isVisible }) =>
    isVisible && ' 1s tiltLeft 1s 1 normal forwards'};
  -webkit-animation: ${({ isVisible }) =>
    isVisible && ' 1s tiltLeft 1s 1 normal forwards'};
  @-webkit-keyframes tiltLeft {
    to {
      transform: rotate(0deg);
    }
  }
  @keyframes tiltLeft {
    to {
      transform: rotate(0deg);
    }
  }
`;
export const NumberCircleBackgroundTiltRight = styled(
  NumberCircleBackgroundBase
)<TNumberCircleBackgroundProps>`
  transform: rotate(10deg);
  animation: ${({ isVisible }) => isVisible && ' 1s tilt 1s 1 normal forwards'};
  -webkit-animation: ${({ isVisible }) =>
    isVisible && ' 1s tilt 1s 1 normal forwards'};
  @-webkit-keyframes tilt {
    to {
      transform: rotate(0deg);
    }
  }

  @keyframes tilt {
    to {
      transform: rotate(0deg);
    }
  }
`;

export const NumberCircleTitle = styled.div`
  font-size: 50px;
  vertical-align: middle;
  color: #eb9c52;
  font-weight: 900;
`;

export const NumberCircleDescription = styled.p<TNumberCircleDescriptionProps>`
  color: #606060;
  text-align: center;
  font-size: 22px;
  mark {
    padding: 0 5px;
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
    }
  }

  @keyframes highlight {
    to {
      background-position: 0 0;
      color: white;
    }
  }
`;
