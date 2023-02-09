import { IContact } from './../../types';
import * as Yup from 'yup';

export const contactInitialData = (): IContact => {
  return { name: '', company: '', phone: '', email: '', message: '' };
};

export const contactFormSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string()
    .required('Email obrigatório')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Email inválido'
    ),
  phone: Yup.string().required('Telefone obrigatório'),
  company: Yup.string().required('Empresa obrigatória'),
});
