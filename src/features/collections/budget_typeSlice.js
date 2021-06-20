import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_budgetTypes = createAsyncThunk(
  "fetch_budgetTypes",
  async () => {
    let response = await fetcher("Budget-Types");
    return response;
  }
);

export const budget_typeSlice = createSlice({
  name: "budget_types",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_budgetTypes.fulfilled]: (state, action) => {
      state.items = state.items.concat(action.payload);
    },
  },
});

export default budget_typeSlice.reducer;
