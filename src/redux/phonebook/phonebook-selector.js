import { createSelector } from '@reduxjs/toolkit';

// filter
export const getContacts = state => state.phonebook.entities;
export const getFilter = state => state.phonebook.filter;
export const getLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

// contactlist

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);
