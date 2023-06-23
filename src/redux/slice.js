import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => (state = action.payload.toLowerCase()),
  },
});
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const tokenSlice = createSlice({
  name: 'auth',
  initialState: null,
  reducers: {
    setToken: (state, action) => (state = action.payload),
  },
});
export const { setToken } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;
