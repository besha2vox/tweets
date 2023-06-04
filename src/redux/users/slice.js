import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getUsers } from './operations';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
  folowing: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
      })
      .addMatcher(isAnyOf(getUsers.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getUsers.fulfilled), state => {
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(getUsers.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;
