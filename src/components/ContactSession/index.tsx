import messages from '@/common/constants/messages';
import sessions from '@/common/constants/sessions';
import { Formik } from 'formik';
import ContactForm from './components/ContactForm';
import {
  contactFormSchema,
  contactInitialData,
} from './components/ContactForm/form-data';
import {
  ContactContainer,
  ContactSessionContainer,
  ContactTitle,
} from './styles';

export default function ContactSession() {
  const onSubmit = () => {};
  return (
    <ContactSessionContainer id={sessions.contact}>
      <ContactContainer>
        <ContactTitle>{messages.contactSessionTitle}</ContactTitle>

        <Formik
          onSubmit={onSubmit}
          initialValues={contactInitialData()}
          validateOnChange={false}
          validationSchema={contactFormSchema}
        >
          <ContactForm loading={false} />
        </Formik>
      </ContactContainer>
    </ContactSessionContainer>
  );
}
