import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_statuses = createAsyncThunk(
  "fetch_statuses",
  async () => {
    let response = await fetcher("Statuses");
    return response;
  }
);

export const statuses_Slice = createSlice({
  name: "statuses",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {
    update_statuses(state,action){
      let index = action.payload.index;
      let attribute = action.payload.attribute;
      let new_value = action.payload.value;
      console.log("items:",action.payload);
      state.items[index][attribute] = new_value; 
  },
  },
  extraReducers: {
    [fetch_statuses.fulfilled]: (state, action) => {
      state.items = state.items.concat(
        action.payload
      );
    }
  },
});
export default statuses_Slice.reducer;
