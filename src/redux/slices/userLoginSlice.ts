import { createSlice } from "@reduxjs/toolkit";

interface userLoginSliceType {
  isLogged: boolean;
  data: {
    balance: string;
    address: string;
  };
}

const initialState: userLoginSliceType = {
  isLogged: false,
  data: {
    balance: "",
    address: "",
  },
};

const userLoginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state, action) => (state = { ...action.payload }),
  },
});
export const { setUserLogin } = userLoginSlice.actions;
export default userLoginSlice.reducer;
