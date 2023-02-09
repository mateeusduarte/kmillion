import React from 'react';

import { useFormikContext } from 'formik';

import { IContact } from '../../types';
import Input from '@/components/Input';
import { FormButton, FormContainer, FormRow } from '../../styles';

export type TContactFormProps = {
  loading: boolean;
};
const ContactForm: React.FC<TContactFormProps> = ({ loading }) => {
  const { values, handleChange, submitForm, errors, isSubmitting } =
    useFormikContext<IContact>();

  const isLoading = loading || isSubmitting;
  return (
    <FormContainer>
      <FormRow>
        <Input
          onChange={handleChange}
          name="name"
          value={values.name}
          placeholder="Ex: Mateus Duarte"
          label="Nome completo*"
          error={!!errors.name}
          errorText={errors.name}
        />
      </FormRow>
      <FormRow>
        <Input
          onChange={handleChange}
          name="company"
          value={values.company}
          placeholder="Ex: Kmillion"
          label="Empresa*"
          error={!!errors.company}
          errorText={errors.company}
        />
      </FormRow>
      <FormRow>
        <Input
          onChange={handleChange}
          name="email"
          value={values.email}
          placeholder="Ex: mateusduarte@gmail.com"
          label="Email*"
          error={!!errors.email}
          errorText={errors.email}
        />
      </FormRow>
      <FormRow>
        <Input
          onChange={handleChange}
          name="phone"
          value={values.phone}
          placeholder="Ex: (11) 98888-8888"
          label="Telefone*"
          error={!!errors.phone}
          mask="(99) 99999-9999"
          errorText={errors.phone}
        />
      </FormRow>
      <FormRow>
        <FormButton onClick={submitForm}>Enviar</FormButton>
      </FormRow>
    </FormContainer>
  );
};

export default ContactForm;
