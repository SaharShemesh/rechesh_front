import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_priorities = createAsyncThunk("fetch/priorities", async () => {
  let response = await fetcher("Priorities");
  return response;
});

export const prioritySlice = createSlice({
  name: "priority",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_priorities.fulfilled]: (state, action) => {
      state.items = state.items.concat(action.payload);
    },
  },
});

export default prioritySlice.reducer;
