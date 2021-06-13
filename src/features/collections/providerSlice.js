import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_providers = createAsyncThunk(
  "fetch_providers",
  async () => {
    let response = await fetcher("Providers");
    return response;
  }
);

export const providers_Slice = createSlice({
  name: "assignments",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_providers.fulfilled]: (state, action) => {
      state.items = state.items.concat(
        action.payload
      );
    },
  },
});

export default providers_Slice.reducer;
