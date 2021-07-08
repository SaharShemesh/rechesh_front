import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_pakas = createAsyncThunk("fetch/pakas", async () => {
  let response = await fetcher("Pakas");
  return response;
});

export const pakaSlice = createSlice({
  name: "paka",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_pakas.fulfilled]: (state, action) => {
      state.items = state.items.concat(action.payload);
    },
  },
});

export default pakaSlice.reducer;
