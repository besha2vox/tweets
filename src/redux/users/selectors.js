export const selectUsers = state => state.users.items;

export const selectFolowings = state => state.users.followings;

export const selectIsLoading = state => state.users.isLoading;

export const selectError = state => state.users.error;

export const selectTotalHints = state => state.users.totalHints;

export const selectUsersLength = state => state.users.items.length;
