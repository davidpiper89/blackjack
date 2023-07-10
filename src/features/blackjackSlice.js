import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../app/initialState";

export const blackjackSlice = createSlice({
  name: "blackjack",
  initialState,

  reducers: {
    setPlayerBet: (state) => {
      state.playerBet = !state.playerBet;
    },
    setPlayerCompleteTurn: (state, action) => {
      state.completeTurn = state.completeTurn = action.payload;
    },
  },
});

export const { setPlayerBet, setPlayerCompleteTurn } = blackjackSlice.actions;

export default blackjackSlice.reducer;
