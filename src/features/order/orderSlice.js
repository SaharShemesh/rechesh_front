import {
  createAsyncThunk,
  createReducer,
  createSlice,
  current,
} from "@reduxjs/toolkit";
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

export const update_General_Details = createAsyncThunk(
  "order-general_details/update",
  async (details) => {
    let { order_id, main_order_id, general_details } = details;
    let response = await fetcher(
      "Main-Order/" + main_order_id + "/order/" + order_id,
      {
        method: "PUT",
        body: JSON.stringify(general_details),
        headers: {
          "Content-Type": "application/json",
          //user: getState().user.Soldier.id,
        },
      }
    );
    return { response, main_order_id: parseInt(main_order_id), order_id };
  }
);
export const update_sell_items = createAsyncThunk(
  "sell_items/update",
  async (details) => {
    let { items, order_id, main_id } = details;
    let response = await fetcher(
      "Main-Order/" + main_id + "/order/" + order_id + "/sell-items",
      {
        method: "PUT",
        body: JSON.stringify(items),
        headers: {
          "Content-Type": "application/json",
          //user: getState().user.Soldier.id,
        },
      }
    );
    return {
      order_id,
      main_id,
      items: response,
    };
  }
);

export const create_sell_items = createAsyncThunk(
  "sell_items/create",
  async (details) => {
    let { items, order_id, main_id } = details;
    let response = await fetcher(
      "Main-Order/" + main_id + "/order/" + order_id + "/sell-items",
      {
        method: "POST",
        body: JSON.stringify(items),
        headers: {
          "Content-Type": "application/json",
          //user: getState().user.Soldier.id,
        },
      }
    );
    return {
      order_id,
      main_id,
      items: response,
    };
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
    update_order: (state, action) => {
      let { sub_order, main_order, updated_details } = action.payload;
      let order =
        state.items[state.items.findIndex((order) => order.id == main_order)];
      order.Orders[order.Orders.findIndex((order) => order.id == sub_order)] = {
        ...order.Orders[
          order.Orders.findIndex((order) => order.id == sub_order)
        ],
        ...updated_details,
      };
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
    [update_General_Details.fulfilled]: (state, action) => {
      console.log(action.payload);
      let order =
        state.items[
          state.items.findIndex(
            (order) => order.id == action.payload.main_order_id
          )
        ];
      order.Orders[
        order.Orders.findIndex((order) => order.id == action.payload.order_id)
      ] = action.payload.response;
    },
    [update_sell_items.fulfilled]: (state, action) => {
      let order =
        state.items[
          state.items.findIndex((order) => order.id == action.payload.main_id)
        ];
      let sub_order =
        order.Orders[
          order.Orders.findIndex((order) => order.id == action.payload.order_id)
        ];

      sub_order.Sell_items = action.payload.items;

      // console.log(
      //   current(
      //     order.Orders[
      //       order.Orders.findIndex(
      //         (order) => order.id == action.payload.order_id
      //       )
      //     ].Sell_items
      //   )
      // );
    },
    [create_sell_items.fulfilled]: (state, action) => {
      let order =
        state.items[
          state.items.findIndex((order) => order.id == action.payload.main_id)
        ];
      let sub_order =
        order.Orders[
          order.Orders.findIndex((order) => order.id == action.payload.order_id)
        ];

      sub_order.Sell_items = Object.assign(
        action.payload.items,
        sub_order.Sell_items
      );
    },
  },
});
//selectors
export let get_orders = (state) => state.orders;

export default orderSlice.reducer;

export const { add_order, update_order } = orderSlice.actions;
