import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_orderTypes = createAsyncThunk("fetch_orderTypes", async () => {
  let response = await fetcher("Order-Types");
  return response;
});

export const type_Slice = createSlice({
  name: "order_Types",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_orderTypes.fulfilled]: (state, action) => {
      state.items = state.items.concat(action.payload);
    },
  },
});

export default type_Slice.reducer;
