import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_current = createAsyncThunk("fetch/current_user", async () => {
  let response = await fetcher("user/1");
  return response;
});

export const currentSlice = createSlice({
  name: "current_user",
  initialState: {
    status: "idle",
    user: {},
  },
  reducers: {},
  extraReducers: {
    [fetch_current.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default currentSlice.reducer;
