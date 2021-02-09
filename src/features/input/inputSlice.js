import { createSlice } from '@reduxjs/toolkit';

export const inputSlice = createSlice({
  name: 'input',
  initialState: {
    searchInput: '',
  },
  reducers: {
    search: (state, action) => {
      const { searchInput } = action.payload
      return {
        ...state,
        searchInput: action.payload
      }
    }
  },
});

export const { search } = inputSlice.actions;

export default inputSlice.reducer;
