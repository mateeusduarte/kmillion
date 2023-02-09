import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const HomeSessionContainer = styled.div`
  display: flex;
  justify-content: center;
  scroll-behavior: smooth;
  background: #eb9c52;

  width: 100%;
`;
export const HomeContainer = styled.div`
  height: 650px;
  width: 60%;
  margin-top: 64px;
  display: flex;
`;

export const HomeTitle = styled.h1`
  font-size: 60px;
  color: white;
  margin: 0;
`;

export const HomeDescription = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: white;
  margin: 0;
`;

export const HomeContentContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  gap: 30px;
`;

export const HomeImageContainer = styled.div`
  position: relative;
  width: 50%;
`;

export const HomeImage = styled(Image)`
  position: absolute;
  bottom: -50px;
  left: 100px;
`;

export const HomeButton = styled(Link)`
  padding: 16px 36px;
  font-size: 25px;
  border-radius: 30px;
  background-color: #494949;
  color: white;
  border: none;
  outline: none;
  box-shadow: 0 3px 6px #00000029;
  text-decoration: none;
  cursor: pointer;
  :hover {
    background-color: #b66315;
  }
  transition: background-color 0.2s ease-out, color 0.2s ease-out;
`;
