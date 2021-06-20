import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_measurements = createAsyncThunk(
  "fetch_measurements",
  async () => {
    let response = await fetcher("Measurements");
    return response;
  }
);

export const measurements_Slice = createSlice({
  name: "measurements",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_measurements.fulfilled]: (state, action) => {
      state.items = state.items.concat(
        action.payload
      );
    },
  },
});

export default measurements_Slice.reducer;
