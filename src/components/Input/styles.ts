import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  box-sizing: border-box;
  background-color: transparent;
  border-radius: 8px;
  color: white;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: 'color 9999s ease-out, background-color 9999s ease-out';
    transition-delay: 9999s;
  }
  &[disabled] {
    color: #acb5bd;
  }
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #acb5bd;
  }
  :disabled {
    cursor: not-allowed;
  }
`;

export default InputBase;
