import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_providers = createAsyncThunk(
  "fetch_providers",
  async () => {
    let response = await fetcher("Providers");
    return response;
  }
);

export let update_providers = createAsyncThunk("update_providers",async (providers) => {
  let response = await fetcher("Providers",{
     method:"PUT",
     body:JSON.stringify(providers),
     headers:{
       "Content-Type":"application/json"
     }
  });
  return response;
})

export const providers_Slice = createSlice({
  name: "providers",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetch_providers.fulfilled]: (state, action) => {
      state.items = state.items.concat(
        action.payload
      );
    },
    [update_providers.fulfilled]:(state,action) => {
      state.items = action.payload;
    }
  },
});

export default providers_Slice.reducer;
