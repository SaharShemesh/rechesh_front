import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_iaf_num = createAsyncThunk(
  "fetch_iaf_num",
  async () => {
    let response = await fetcher("Iaf-nums");
    return response;
  }
);

export const iaf_num_Slice = createSlice({
  name: "iaf_nums",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_iaf_num.fulfilled]: (state, action) => {
      state.items = state.items.concat(
        action.payload
      );
    },
  },
});

export default iaf_num_Slice.reducer;
