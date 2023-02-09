import { THeaderLinkProps } from './types';
import Link from 'next/link';
import styled from 'styled-components';
import breakpoints from '@/common/constants/breakpoints';

export const HeaderContainer = styled.div`
  position: fixed;
  padding: 10px 30px;
  background: white;
  box-shadow: 0 4px 17px #0000004d;
  width: 100%;
  height: 64px;
  margin-bottom: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: 100;
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  gap: 30px;
`;

export const HeaderLink = styled(Link)<THeaderLinkProps>`
  text-decoration: none;
  color: ${({ isSelected }) => (isSelected ? '#e85612' : '#626060')};
  :hover {
    color: #e85612;
  }
  @media only screen and ${breakpoints.device.cel} {
    display: none;
  }
  @media only screen and ${breakpoints.device.tablet} {
    display: none;
  }
`;

export const HeaderButton = styled(Link)`
  font-size: 16px;
  padding: 10px 32px;
  border-radius: 30px;
  background-color: #494949;
  color: white;
  box-shadow: 0 4px 17px #0000004d;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #b66315;
  }
  transition: background-color 0.2s ease-out, color 0.2s ease-out;
  text-decoration: none;
  @media only screen and ${breakpoints.device.cel} {
    display: none;
  }
`;
