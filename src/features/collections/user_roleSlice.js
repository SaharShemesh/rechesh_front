import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_users_roles = createAsyncThunk(
  "fetch_users_roles",
  async () => {
    let response = await fetcher("users-roles");
    return response;
  }
);

export const users_roles_Slice = createSlice({
  name: "users_roles",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_users_roles.fulfilled]: (state, action) => {
      state.items = state.items.concat(
        action.payload
      );
    },
  },
});

export default users_roles_Slice.reducer;
