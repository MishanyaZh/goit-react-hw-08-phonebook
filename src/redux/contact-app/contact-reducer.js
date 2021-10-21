import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import types from './contact-types';
import toast from 'react-hot-toast';
import actions from './contact-actions';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const items = createReducer(initialState, {
  [actions.formSubmitHandler]: (state, { payload }) => {
    const doubleContact = state.find(contact =>
      contact.name.toLowerCase().includes(payload.name.toLowerCase()),
    );

    const variable =
      doubleContact && doubleContact.name.length === payload.name.length;

    if (variable) {
      toast.error(`${payload.name} is already in contacts`);
      return [...state];
    } else {
      toast.success(`${payload.name} add to Contacts`, { icon: '👏' });
      return [payload, ...state];
    }
  },

  [actions.deleteContact]: (state, { payload }) => {
    console.log(payload.name);
    toast.success(`${payload.name} delete with Contacts!`);
    return state.filter(contact => contact.id !== payload.contactId);
  },
});

const filter = createReducer('', {
  [actions.changeFilter]: (_state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

// do--------------------------------------------------------------

// const items = (
//   state = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   { type, payload },
// ) => {
//   switch (type) {
//     case types.ADD:
//       const doubleContact = state.find(contact =>
//         contact.name.toLowerCase().includes(payload.name.toLowerCase()),
//       );

//       if (doubleContact && doubleContact.name.length === payload.name.length) {
//         toast.error(`${payload.name} is already in contacts`);
//         return [...state];
//       } else {
//         toast.success(`${payload.name} add to Contacts`, { icon: '👏' });
//         return [payload, ...state];
//       }

//     case types.DELETE:
//       toast.success(`${payload.name} delete with Contacts!`);
//       return state.filter(contact => contact.id !== payload.contactId);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
