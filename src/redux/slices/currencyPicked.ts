import { createSlice } from "@reduxjs/toolkit";

interface currencyPickedSliceType {
  logo: string;
  currency: string;
}

const initialState: currencyPickedSliceType = {
  logo: "",
  currency: "",
};

const currencyPickedSlice = createSlice({
  name: "currencyPicked",
  initialState,
  reducers: {
    setCurrencyPicked: (state, action) => (state = { ...action.payload }),
  },
});
export const { setCurrencyPicked } = currencyPickedSlice.actions;
export default currencyPickedSlice.reducer;
