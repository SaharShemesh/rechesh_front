import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../helpers/fetcher";

//thunk
export let fetch_constants = createAsyncThunk(
  "fetch_constants",
  async () => {
    let response = await fetcher("System-Constants");
    return response;
  }
);

export let update_constants = createAsyncThunk("update_constants",async (constants) => {
  let response = await fetcher("System-Constants",{
     method:"PUT",
     body:JSON.stringify(constants),
     headers:{
       "Content-Type":"application/json"
     }
  });
  return response;
})

export const constants_Slice = createSlice({
  name: "constants",
  initialState: {
    status: "idle",
    items: [],
  },
  reducers: {
    update_constant(state,action){
      let index = action.payload.index;
      let attribute = action.payload.attribute;
      let new_value = action.payload.value;
      console.log("items:",action.payload);
      state.items[index][attribute] = new_value; 
  },
  },
  extraReducers: {
    [fetch_constants.fulfilled]: (state, action) => {
      state.items = state.items.concat(
        action.payload
      );
    },
    [update_constants.fulfilled]:(state,action) => { 
      state.items = action.payload;
    },
  },
});
export const {update_constant} = constants_Slice.actions;
export default constants_Slice.reducer;
