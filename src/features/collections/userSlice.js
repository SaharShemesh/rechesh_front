import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_users = createAsyncThunk(
  "fetch_users",
  async () => {
    let response = await fetcher("Users");
    return response;
  }
);

export let update_users = createAsyncThunk("update_users",async (users) => {
    let response = await fetcher("Users",{
       method:"PUT",
       body:JSON.stringify(users),
       headers:{
         "Content-Type":"application/json"
       }
    });
    return response;
})

export const users_Slice = createSlice({
  name: "users",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_users.fulfilled]: (state, action) => {
      state.items = state.items.concat(
        action.payload
      );
    },
    [update_users.fulfilled]:(state,action) => {
        state.items = action.payload;
    }
  },
});

export default users_Slice.reducer;
