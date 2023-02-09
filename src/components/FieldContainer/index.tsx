import React, { PropsWithChildren } from 'react';

import {
  FieldWrapper,
  FieldLabel,
  FieldContent,
  FieldErrorLabel,
  FieldContentWrapper,
  FieldSideAppend,
  FieldHint,
  FieldHelperText,
  FieldLabelContainer,
} from './styles';

export type TFieldContainerProps = {
  label?: string;
  error?: boolean;
  errorText?: string | string[];
  helperText?: string;
  disabled?: boolean;
  hint?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  height?: number;
  forceLabelPadding?: boolean;
};

const FieldContainer: React.FC<PropsWithChildren<TFieldContainerProps>> = ({
  label,
  children,
  error,
  errorText,
  disabled = false,
  hint,
  left,
  right,
  height,
  helperText,
  forceLabelPadding: _forceLabelPadding,
}) => {
  const forceLabelPadding = !label && _forceLabelPadding;

  return (
    <FieldWrapper
      forceLabelPadding={forceLabelPadding}
      data-testid="field-container"
    >
      {!!label && (
        <FieldLabelContainer>
          <FieldLabel disabled={disabled}>{label}</FieldLabel>
        </FieldLabelContainer>
      )}
      {!!hint && <FieldHint disabled={disabled}>{hint}</FieldHint>}
      <FieldContentWrapper disabled={disabled} error={error} style={{ height }}>
        {!!left && (
          <FieldSideAppend disabled={disabled}>{left}</FieldSideAppend>
        )}
        <FieldContent disabled={disabled}>{children}</FieldContent>
        {!!right && (
          <FieldSideAppend disabled={disabled}>{right}</FieldSideAppend>
        )}
      </FieldContentWrapper>
      {!!helperText && (
        <FieldHelperText disabled={disabled}>{helperText}</FieldHelperText>
      )}
      {!!error && !!errorText && (
        <FieldErrorLabel>
          {Array.isArray(errorText) ? errorText.map((err) => err) : errorText}
        </FieldErrorLabel>
      )}
    </FieldWrapper>
  );
};

export default FieldContainer;
