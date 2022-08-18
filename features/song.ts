import { createSlice } from "@reduxjs/toolkit";

const initialState = { activeSongs: [], activesong: null };

export const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    changeActiveSongs: (state: any, action) => {
      console.log("Action", action.payload);
      state.activeSongs = action.payload;
    },
    changeActiveSong: (state: any, action) => {
      console.log("Action", action.payload);
      state.activesong = action.payload;
    },
  },
});

export const { changeActiveSongs, changeActiveSong } = songSlice.actions;

export default songSlice.reducer;
