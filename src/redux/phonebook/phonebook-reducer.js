import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './phonebook-actions';
import {
  fetchContactsAction,
  addContactAction,
  deleteContactAction,
} from './phonebook-operations';

import toast from 'react-hot-toast';

const entities = createReducer([], {
  [fetchContactsAction.fulfilled]: (_state, { payload }) => payload,

  [addContactAction.fulfilled]: (state, { payload }) => {
    const doubleContact = state.find(contact =>
      contact.name.toLowerCase().includes(payload.name.toLowerCase()),
    );

    const variable =
      doubleContact && doubleContact.name.length === payload.name.length;

    if (variable) {
      toast.error(`${payload.name} is already in contacts`);
      return state;
    } else {
      toast.success(`${payload.name} add to Contacts`, { icon: '👏' });
      return [payload, ...state];
    }
  },

  [deleteContactAction.fulfilled]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer('', {
  [changeFilter]: (_state, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContactsAction.pending]: () => true,
  [fetchContactsAction.fulfilled]: () => false,
  [fetchContactsAction.rejected]: () => false,
  [deleteContactAction.fulfilled]: () => false,
  [deleteContactAction.pending]: () => true,
  [deleteContactAction.rejected]: () => false,
  [addContactAction.fulfilled]: () => false,
  [addContactAction.pending]: () => true,
  [addContactAction.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContactsAction.rejected]: (_state, action) => action.payload,
  [fetchContactsAction.pending]: () => null,
  [addContactAction.pending]: () => null,
  [addContactAction.rejected]: (_state, action) => action.payload,
  [deleteContactAction.pending]: () => null,
  [deleteContactAction.rejected]: (_state, action) => action.payload,
});

export default combineReducers({
  entities,
  filter,
  isLoading,
  error,
});
