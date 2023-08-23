import { createSlice } from "@reduxjs/toolkit";

interface walletConnectionSliceType {
  isPopup: boolean;
}

const initialState: walletConnectionSliceType = {
  isPopup: false,
};

const walletConnectionSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setPopupWallet: (state, action) => void (state.isPopup = action.payload),
  },
});
export const { setPopupWallet } = walletConnectionSlice.actions;
export default walletConnectionSlice.reducer;
