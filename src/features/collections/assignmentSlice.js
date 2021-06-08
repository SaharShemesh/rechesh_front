import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_assignments = createAsyncThunk(
  "fetch_assignments",
  async () => {
    let response = await fetcher("Assignments");
    return response;
  }
);

export const assignments_Slice = createSlice({
  name: "assignments",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_assignments.fulfilled]: (state, action) => {
      state.items = state.items.concat(
        action.payload.map((assignment) => ({
          id: assignment.id,
          name: assignment.assignment_number,
        }))
      );
    },
  },
});

export default assignments_Slice.reducer;
