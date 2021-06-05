import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";
//thunks
export const fetchOrders = createAsyncThunk("orders/fetch_orders", async () => {
  let response = await fetcher("Main-Orders");
  console.log(response);
  return response;
});
export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    items: [],
    error: null,
    status: "idle",
  },
  reducers: {
    add_order: (state, action) => {
      let main_order = action.payload.main_id;
      let order_id = action.payload.order_id;
      let order = state
        .find((order) => order.id == main_order)
        .orders.find((order) => order.id == order_id);
      order.push(action.payload);
    },
  },
  extraReducers: {
    [fetchOrders.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.items = state.items.concat(action.payload);
    },
    [fetchOrders.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});
//selectors
export let get_orders = (state) => state.orders;

export default orderSlice.reducer;

export const { add_order } = orderSlice.actions;
