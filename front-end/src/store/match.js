import { createSlice } from "@reduxjs/toolkit";

const matchSlice = createSlice({
  name: "match",
  initialState: { id: null, problem: {} },
  reducers: {
    setMatch: (state, action) => {
      const { id, problem } = action.payload.match;
      state.id = id;
      state.problem = problem;
    },
  },
});

export default matchSlice.reducer;
export const { setMatch } = matchSlice.actions;
