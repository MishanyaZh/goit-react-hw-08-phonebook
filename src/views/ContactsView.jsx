import { Toaster } from 'react-hot-toast';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContactsAction } from '../redux/phonebook/phonebook-operations';

import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import Section from '../components/containers/Section/Section';
import MContainer from '../components/containers/MainContainer/MainContainer';

const ContactsView = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContactsAction()), [dispatch]);

  return (
    <MContainer title="Phonebook">
      <Section>
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
      <Toaster position="top-center" reverseOrder={false} />
    </MContainer>
  );
};

export default ContactsView;
