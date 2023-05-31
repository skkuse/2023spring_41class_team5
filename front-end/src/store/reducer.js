import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { id: null, name: null, token: null },
  reducers: {
    login: (state, action) => {
      const { id, name, token } = action.payload.data.user;
      state.id = id;
      state.name = name;
      state.token = token;
    },
  },
});

export default userSlice.reducer;
export const { login } = userSlice.actions;
