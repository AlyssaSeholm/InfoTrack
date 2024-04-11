import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  currentTheme: localStorage.getItem('theme') || 'acid',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.currentTheme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions;

export const ThemeReducer = themeSlice.reducer
// export default themeSlice.reducer;