import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_assign = createAsyncThunk("fetch_assign", async () => {
  let response = await fetcher("Assignments");
  return response;
});

export const assign_NumSlice = createSlice({
  name: "assign_num",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_assign.fulfilled]: (state, action) => {
      state.items = state.items.concat(
        action.payload.map(
          ({ id, assignment_number }) => ({
            id: id,
            name: assignment_number,
          })
        )
      );
    },
  },
});

export default assign_NumSlice.reducer;
