import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://61699a3009e030001712c4bd.mockapi.io/api/v1/';

export const fetchContactsAction = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const responce = await axios.get('/contacts');
      console.log(responce.data);
      return responce.data;
      // return await axios.get('/contacts');
    } catch (error) {}
  },
);

export const addContactAction = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    console.log(`contact`, contact);
    // return await axios.post('/contacts', contact );
    try {
      const responce = await axios.post('/contacts', contact);
      console.log(responce);
      return responce.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const deleteContactAction = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    await axios.delete(`/contacts/${id}`);
    return id;
  },
);
