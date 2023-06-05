import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getUsers, following } from './operations';

const initialState = {
  items: [],
  totalHints: 0,
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.totalHints = payload.totalHints;

        if (payload.page === 1) {
          state.items = payload.data;
          return;
        }
        state.items.push(...payload.data);
      })
      .addCase(following.fulfilled, (state, { payload }) => {
        const indx = state.items.findIndex(item => item.id === payload.id);
        state.items.splice(indx, 1, payload);
      })
      .addMatcher(isAnyOf(getUsers.pending, following.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getUsers.fulfilled, following.fulfilled), state => {
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(getUsers.rejected, following.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const usersReducer = usersSlice.reducer;
