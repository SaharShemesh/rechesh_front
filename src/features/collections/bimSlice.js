import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_assignments = createAsyncThunk("fetch_bims", async () => {
  let response = await fetcher("Bims");
  return response;
});

export const Bims_slice = createSlice({
  name: "Bims",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_assignments.fulfilled]: (state, action) => {
      state.items = state.items.concat(action.payload);
    },
  },
});

export default Bims_slice.reducer;
