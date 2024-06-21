import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [],
};

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload ;
    },
  },
});

export const { setArticles } = articleSlice.actions;
export default articleSlice.reducer;
