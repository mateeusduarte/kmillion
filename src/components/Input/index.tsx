import React, { InputHTMLAttributes } from 'react';
import InputMask from 'react-input-mask';
import FieldContainer, { TFieldContainerProps } from '../FieldContainer';

import InputBase from './styles';

export type InputProps = {
  mask?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  TFieldContainerProps;

const Input: React.FC<InputProps> = ({ mask, ...rest }) => {
  return (
    <FieldContainer {...rest}>
      <InputMask mask={mask || ''} {...rest}>
        {/*@ts-expect-error*/}
        {() => <InputBase {...rest} />}
      </InputMask>
    </FieldContainer>
  );
};

export default Input;
