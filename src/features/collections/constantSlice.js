import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_constants = createAsyncThunk(
  "fetch_constants",
  async () => {
    let response = await fetcher("System-Constants");
    return response;
  }
);

export const constants_Slice = createSlice({
  name: "constants",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_constants.fulfilled]: (state, action) => {
      state.items = state.items.concat(
        action.payload
      );
    },
  },
});

export default constants_Slice.reducer;
