import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { id: null, name: null, token: null },
  reducers: {
    login: (state, action) => {
      const { id, name, token } = action.payload.user;
      state.id = id;
      state.name = name;
      state.token = token;
    },
    logout: (state, action) => {
      state.id = null;
      state.name = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export default userSlice.reducer;
export const { login, logout } = userSlice.actions;
