import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import fetcher from "../../helpers/fetcher";
//thunks
export const fetchOrders = createAsyncThunk(
  "orders/fetch_orders",
  async (customer_id, { getState }) => {
    let response = await fetcher(
      "Main-Orders/" + getState().current_user.user.id
    );
    return response;
  }
);

export const createOrder = createAsyncThunk(
  "orders/create_order",
  async (details, { getState }) => {
    let response = await fetcher("Main-Order/", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
        //user: getState().user.Soldier.id,
      },
    });
    return response;
  }
);
export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    items: [],
    error: null,
    status: "idle",
  },
  reducers: {
    add_order: (state, action) => {
      state.items.push(action.payload.order);
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
    [createOrder.fulfilled]: (state, action) => {
      state.items = state.items.concat(action.payload);
    },
  },
});
//selectors
export let get_orders = (state) => state.orders;

export default orderSlice.reducer;

export const { add_order } = orderSlice.actions;
