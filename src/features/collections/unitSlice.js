import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_units = createAsyncThunk("fetch_units", async () => {
  let response = await fetcher("units");
  return response;
});

export const unitSlice = createSlice({
  name: "units",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_units.fulfilled]: (state, action) => {
      state.items = state.items.concat(action.payload);
    },
  },
});

export default unitSlice.reducer;
