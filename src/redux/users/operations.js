import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64023309302b5d671c3586c1.mockapi.io/';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async ({ page, isFollowing }, { rejectWithValue }) => {
    const params = {
      page,
      limit: 3,
    };

    const paramsForTotalHints = {};

    if (typeof isFollowing === 'boolean') {
      params.isFollowing = isFollowing;
      paramsForTotalHints.isFollowing = isFollowing;
    }

    const searchParams = new URLSearchParams(params).toString();
    const searchParamsForTotalHints = new URLSearchParams(
      paramsForTotalHints
    ).toString();

    try {
      const response = await axios.get(`users?${searchParams}`);
      const res = await axios.get(`users?${searchParamsForTotalHints}`);
      const totalHints = res.data.length;

      return { data: response.data, page, totalHints };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const following = createAsyncThunk(
  'users/following',
  async ({ id, isFollowing, followers }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`users/${id}`, {
        isFollowing,
        followers: isFollowing ? followers + 1 : followers - 1,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
