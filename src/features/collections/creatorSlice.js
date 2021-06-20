import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_creators = createAsyncThunk(
  "fetch_creators",
  async () => {
    let response = await fetcher("Creators");
    return response;
  }
);

export const creators_Slice = createSlice({
  name: "creators",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_creators.fulfilled]: (state, action) => {
      state.items = state.items.concat(
        action.payload
      );
    },
  },
});

export default creators_Slice.reducer;
