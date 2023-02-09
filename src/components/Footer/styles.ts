import breakpoints from '@/common/constants/breakpoints';
import styled from 'styled-components';

export const FooterSessionContainer = styled.div`
  display: flex;
  justify-content: center;
  scroll-behavior: smooth;
  background: #f0bf92;
  width: 100%;
  padding: 30px 0;
`;

export const FooterContainer = styled.div`
  height: fit-content;
  width: 60%;
  justify-content: space-between;
  background: #f0bf92;
  display: flex;
  gap: 60px;
  @media only screen and ${breakpoints.device.cel} {
    flex-direction: column;
  }
  @media only screen and ${breakpoints.device.tablet} {
    flex-direction: column;
  }
`;
