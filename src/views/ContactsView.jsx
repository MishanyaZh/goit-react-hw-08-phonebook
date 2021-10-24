import { Toaster } from 'react-hot-toast';
import Loader from 'react-loader-spinner';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsAction } from '../redux/phonebook/phonebook-operations';

import { getLoading } from '../redux/phonebook/phonebook-selector';

import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import Section from '../components/containers/Section/Section';
import MContainer from '../components/containers/MainContainer/MainContainer';

const ContactsView = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  useEffect(() => dispatch(fetchContactsAction()), [dispatch]);

  return (
    <MContainer title="Phonebook">
      <Section>
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        {/* {isLoading &&
        <Loader type="Rings" color="#00BFFF" height={50} width={50} position="center"/>} */}
        <ContactList />
      </Section>
      <Toaster position="top-center" reverseOrder={false} />
    </MContainer>
  );
};

export default ContactsView;
