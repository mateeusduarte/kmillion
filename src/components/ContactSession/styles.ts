import breakpoints from '@/common/constants/breakpoints';
import { Form } from 'formik';
import styled from 'styled-components';

export const ContactSessionContainer = styled.div`
  display: flex;
  justify-content: center;
  scroll-behavior: smooth;
  background: #606060;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 0;
`;

export const ContactContainer = styled.div`
  min-height: 300px;
  width: 70%;
  @media only screen and ${breakpoints.device.cel} {
    width: 80%;
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and ${breakpoints.device.tablet} {
    width: 80%;
    flex-direction: column;
    justify-content: center;
  }
  background: #606060;
  display: flex;
  jusfity-content: space-between;
  gap: 60px;
  padding: 40px 0;
  align-items: center;
`;

export const FormRow = styled.div`
  padding: 10px;
`;

export const ContactTitle = styled.h1`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  font-size: 40px;
  text-align: center;
  color: white;
  @media only screen and ${breakpoints.device.cel} {
    width: 100%;
  }
  @media only screen and ${breakpoints.device.tablet} {
    width: 100%;
  }
  margin: 0;
  height: 100%;
`;

export const FormContainer = styled(Form)`
  width: 30%;
  @media only screen and ${breakpoints.device.cel} {
    width: 100%;
  }
  @media only screen and ${breakpoints.device.tablet} {
    width: 100%;
  }
`;
export const FormButton = styled.button`
  padding: 16px 36px;
  font-size: 15px;
  border-radius: 30px;
  width: 100%;
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
