import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  loading: boolean;
  advice: string;
  error: string;
};
const initialState: InitialState = {
  loading: false,
  advice: "",
  error: "",
};

export const fetchAdvice = createAsyncThunk("advice/fetchAdvice", async () => {
  const { data } = await axios.get("https://api.adviceslip.com/advice");
  return data.slip.advice;
});

const adviceSlice = createSlice({
  name: "advice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAdvice.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchAdvice.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.advice = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchAdvice.rejected, (state, action) => {
      state.loading = false;
      state.advice = "";
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default adviceSlice.reducer;
