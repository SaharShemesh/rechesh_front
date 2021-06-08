import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_bags = createAsyncThunk("fetch_bags", async () => {
  let response = await fetcher("Pulling-Bags");
  return response;
});

export const pulling_BagSlice = createSlice({
  name: "pulling_bags",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_bags.fulfilled]: (state, action) => {
      state.items = state.items.concat(
        action.payload.map(
          ({ bag_id, bag_description, sum_budget, bag_number }) => ({
            id: bag_id,
            name: bag_description,
            sum_budget,
            bag_number,
          })
        )
      );
    },
  },
});

export default pulling_BagSlice.reducer;
