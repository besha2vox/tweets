import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64023309302b5d671c3586c1.mockapi.io/';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (page, { rejectWithValue }) => {
    const searchParams = new URLSearchParams({
      page,
      limit: 3,
    }).toString();

    try {
      const response = await axios.get(`users?${searchParams}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const follow = createAction('users/folow', id => ({
  payload: id,
}));
