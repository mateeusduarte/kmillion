import { THeaderLinkProps } from './types';
import Link from 'next/link';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  padding: 10px 30px;
  background: white;
  box-shadow: 0 4px 17px #0000004d;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

export const HeaderButton = styled.a`
  font-size: 16px;
  padding: 10px 32px;
  border-radius: 30px;
  background-color: #494949;
  color: white;
  box-shadow: 0 4px 17px #0000004d;
  border: none;
  cursor: pointer;
`;
