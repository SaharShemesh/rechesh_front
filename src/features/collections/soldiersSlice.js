import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_soldiers = createAsyncThunk("fetch_soldiers", async () => {
  let response = await fetcher("Soldiers");
  return response;
});

export const soldiersSlice = createSlice({
  name: "soldiers",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_soldiers.fulfilled]: (state, action) => {
      state.items = state.items.concat(action.payload);
    },
  },
});

export default soldiersSlice.reducer;
