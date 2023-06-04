import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getUsers, follow } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  followings: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.items.push(...payload);
      })
      .addCase(follow, (state, { payload }) => {
        if (state.followings.includes(payload)) {
          const indx = state.followings.findIndex(el => el === payload);
          state.followings.splice(indx, 1);
        } else {
          state.followings.push(payload);
        }
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
