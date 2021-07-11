import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_paka_Type = createAsyncThunk("fetch/paka_type", async () => {
  let response = await fetcher("Paka-Types");
  return response;
});

export const type_Slice = createSlice({
  name: "Paka_Types",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_paka_Type.fulfilled]: (state, action) => {
      state.items = state.items.concat(action.payload);
    },
  },
});

export default type_Slice.reducer;
