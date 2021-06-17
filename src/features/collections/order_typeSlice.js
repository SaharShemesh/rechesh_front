import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_orderType = createAsyncThunk("fetch_orderType", async () => {
  let response = await fetcher("Order-Types");
  return response;
});

export const unitSlice = createSlice({
  name: "order_type",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_orderType.fulfilled]: (state, action) => {
      state.items = state.items.concat(
        action.payload.map(
          ({ id, type_id }) => ({
            id: type_id,
            name: type,
          })
        )
      );
    },
  },
});

export default unitSlice.reducer;
