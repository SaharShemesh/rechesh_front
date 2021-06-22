import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_user_permissions = createAsyncThunk(
  "fetch_user_permissions",
  async () => {
    let response = await fetcher("user-permissions");
    return response;
  }
);

export const user_permissions_Slice = createSlice({
  name: "user_permissions",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_user_permissions.fulfilled]: (state, action) => {
      state.items = state.items.concat(
        action.payload
      );
    },
  },
});

export default user_permissions_Slice.reducer;
