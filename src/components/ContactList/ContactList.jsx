// import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selector';
import {
  fetchContactsAction,
  deleteContactAction,
} from '../../redux/phonebook/phonebook-operations';
import toast from 'react-hot-toast';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);

  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);

  const onDeleteContact = (id, name) => {
    dispatch(deleteContactAction(id));
    toast.success(`${name} delete with Contacts!`);
  };

  return (
    <ul className={css.contactsList}>
      {visibleContacts.length === 0 && <p>not Contact...</p>}
      {visibleContacts &&
        visibleContacts.map(({ id, name, number }) => (
          <li key={id} className={css.contactsItem}>
            <span>{name}:</span>
            <span>{number}</span>
            <span>
              <button
                className={css.listButton}
                type="button"
                onClick={() => onDeleteContact(id, name)}
              >
                delete
              </button>
            </span>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   onDeleteContact: PropTypes.func,
// };
