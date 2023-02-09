import styled from 'styled-components';

import {
  TFieldWrapperProps,
  TFieldLabelProps,
  TFieldContentWrapperProps,
  TFieldContentProps,
  TFieldSideAppendProps,
  TFieldHintProps,
  TFieldHelperTextProps,
} from './types';

export const FieldWrapper = styled.div<TFieldWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  padding-top: ${({ forceLabelPadding }) => (forceLabelPadding ? 32 : 0)}px;
`;

export const FieldLabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const FieldLabel = styled.label<TFieldLabelProps>`
  font-weight: 600;
  color: ${({ disabled }) => (disabled ? '#ACB5BD' : 'white')};
  font-size: 14px;
  white-space: nowrap;
  margin: 0;
  text-align: start;
`;
export const FieldHint = styled.label<TFieldHintProps>`
  font-weight: 400;
  color: ${({ disabled }) => (disabled ? '#ACB5BD' : '#565E66')};
  margin-bottom: 10px;
  font-size: 12px;
`;

export const FieldHelperText = styled.label<TFieldHelperTextProps>`
  font-weight: 400;
  color: ${({ disabled }) => (disabled ? '#ACB5BD' : '#565E66')};
  margin-bottom: 10px;
  font-size: 14px;
`;
export const FieldContentWrapper = styled.div<TFieldContentWrapperProps>`
  display: flex;
  flex-direction: row;
  height: 56px;
  align-items: stretch;
  background-color:  ${({ disabled }) => (disabled ? '#FAFBFC' : '#FFFFFF')}

  background-color: ${({ error }) => error && '#f0bf92'} !important;

  border: ${({ error }) =>
    `${error ? 2 : 1}px solid ${error ? '#b66315' : '#DDE2E5'}`};

  box-sizing: border-box;
  border-radius: 8px;
  :focus {
    border: 2px solid #eb9c52;
    outline: none;
  }
`;

export const FieldContent = styled.div<TFieldContentProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  flex: 1;
  padding: 0 12px;
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  max-width: 100%;
`;

export const FieldSideAppend = styled.div<TFieldSideAppendProps>`
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-color: #dadada;
  border-style: solid;
  border-width: 0;
  font-weight: 700;
  color: ${({ disabled }) => (disabled ? '#ACB5BD' : '#565E66')};
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
`;

export const FieldErrorLabel = styled.p`
  width: 100%;
  margin-top: -2px;
  padding-left: 12px;
  color: #eb9c52 !important;
`;
