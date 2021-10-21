import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../redux/contact-app/contact-selector';
import contactActions from '../redux/contact-app/contact-actions';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(getVisibleContacts);

  const onDeleteContact = (id, name) => {
    dispatch(contactActions.deleteContact(id, name));
  };

  return (
    <ul className={css.contactsList}>
      {visibleContacts.map(({ id, name, number }) => (
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
// old
// const getVisibleContacts = (items, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return items.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getVisibleContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: (id, name) =>
//     dispatch(contactActions.deleteContact(id, name)),
// });

// export default connect(mapStateToProps,mapDispatchToProps)(ContactList);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
