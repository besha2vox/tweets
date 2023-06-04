import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'api/apiDefault';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (page, { rejectWithValue }) => {
    const searchParams = new URLSearchParams({
      page,
      limit: 3,
    }).toString();

    try {
      const response = await instance.get(`users?${searchParams}`);
      console.log({ response });
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
