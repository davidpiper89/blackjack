import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../app/initialState";

export const blackjackSlice = createSlice({
  name: "blackjack",
  initialState,

  reducers: {},
});

export const { setPlayerCompleteTurn } = blackjackSlice.actions;

export default blackjackSlice.reducer;
