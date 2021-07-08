import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

let bag_mapper = (bags) => {
  return bags.map(
    (
      {
        bag_description,
        bag_number,
        sum_budget,
        tiov_budget,
        bag_id,
        calculated_finished_budget,
      },
      index
    ) => ({
      key: new Date().getTime() + "_" + index,
      bag_id,
      bag_description,
      bag_number,
      sum_budget: sum_budget ? sum_budget : 0,
      tiov_budget: tiov_budget == 0 ? calculated_finished_budget : tiov_budget,
      calculated_finished_budget,
      budget_left: sum_budget - (0 ? calculated_finished_budget : tiov_budget),
    })
  );
};

//thunk creators
export let fetch_bags = createAsyncThunk("fetch_bags", async () => {
  let response = await fetcher("Pulling-Bags");
  return response;
});

export let update_bags = createAsyncThunk("update_bags", async (bags) => {
  let response = await fetcher("Pulling-Bags", {
    method: "PUT",
    body: JSON.stringify(bags),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
});

export let delete_bag = createAsyncThunk(
  "delete_bag",
  async ({ bag_id, key }) => {
    let response = await fetcher("Pulling-Bags/" + bag_id, {
      method: "DELETE",
    });
    return { key };
  }
);

export let create_bags = createAsyncThunk("create_bags", async (bags) => {
  let response = fetcher("Pulling-Bags", {
    method: "POST",
    body: JSON.stringify(bags),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
});
export const pulling_BagSlice = createSlice({
  name: "pulling_bags",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {
    update_bag(state, action) {
      let { index, attribute, value } = action.payload;
      if (attribute != "bag_description") {
        state.items[index][attribute] = !parseFloat(value)
          ? 0
          : parseFloat(value);
        state.items[index].budget_left =
          state.items[index].sum_budget - state.items[index].tiov_budget;
      } else state.items[index][attribute] = value;
    },
    add_bag(state, action) {
      state.items.push({
        key: new Date().getTime() + "_" + state.items.length,
        bag_number: "",
        bag_description: "",
        sum_budget: 0,
        calculated_finished_budget: "0",
        tiov_budget: 0,
        budget_left: 0,
      });
    },
    remove_bag(state, action) {
      state.items = state.items.filter((bag) => bag.key != action.payload.key);
    },
  },
  extraReducers: {
    [fetch_bags.fulfilled]: (state, action) => {
      state.items = bag_mapper(action.payload);
    },
    [create_bags.pending]: (state, action) => {
      state.items = state.items.filter((item) => item.bag_id);
    },
    [create_bags.fulfilled]: (state, action) => {
      state.items = state.items.concat(bag_mapper(action.payload));
    },
    [delete_bag.fulfilled]: (state, action) => {
      pulling_BagSlice.caseReducers.remove_bag(state, action);
    },
  },
});

export default pulling_BagSlice.reducer;
export const { add_bag, update_bag, remove_bag } = pulling_BagSlice.actions;
