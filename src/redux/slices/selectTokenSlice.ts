import { createSlice } from "@reduxjs/toolkit";

interface selectTokenSliceType {
  isPopup: boolean;
}

const initialState: selectTokenSliceType = {
  isPopup: false,
};

const selectTokenSlice = createSlice({
  name: "selectToken",
  initialState,
  reducers: {
    setIsPopupSelectToken: (state, action) =>
      void (state.isPopup = action.payload.isPopup),
  },
});
export const { setIsPopupSelectToken } = selectTokenSlice.actions;
export default selectTokenSlice.reducer;
