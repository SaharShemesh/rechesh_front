import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_types = createAsyncThunk("fetch_types", async () => {
  let response = await fetcher("Procument-Types");
  return response;
});

export const procument_TypesSlice = createSlice({
  name: "procument_types",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_types.fulfilled]: (state, action) => {
      state.items = state.items.concat(
        action.payload.map((type) => ({ id: type.type_id, name: type.type }))
      );
    },
  },
});

export default procument_TypesSlice.reducer;
