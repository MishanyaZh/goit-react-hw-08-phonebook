import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
// import types from './contact-types';

const formSubmitHandler = createAction('contact/add', ({ name, number }) => ({
  payload: {
    name,
    number,
    id: uuidv4(),
  },
}));

const deleteContact = createAction('contact/delete', (contactId, name) => ({
  payload: {
    contactId,
    name,
  },
}));

const changeFilter = createAction('contact/changeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { formSubmitHandler, deleteContact, changeFilter };

// do-----------------------------------------

// const formSubmitHandler = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     name,
//     number,
//     id: uuidv4(),
//   },
// });

// const deleteContact = (contactId, name) => ({
//   type: types.DELETE,
//   payload: { contactId, name },
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
