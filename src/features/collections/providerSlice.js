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

export let create_providers = createAsyncThunk("create_providers",async (providers) => {
  let response = await fetcher("Providers",{
     method:"POST",
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
  reducers: {
     update_provider(state,action){
         let index = action.payload.index;
         let attribute = action.payload.attribute;
         let new_value = action.payload.value;
         state.items[index][attribute] = new_value; 
     },
     new_provider(state,action){
      let new_provider = {
        key: state.items.length,
        provider_name: "",
        profession: "",
        phones: "",
        fax: "",
        contact_name: "",
        adress: "",
        mail: "",
        site_adress: "",
        provider_num: 0,
      };
      state.items.push(new_provider);
     }
  },
  extraReducers: {
    [fetch_providers.fulfilled]: (state, action) => {
      state.items = state.items.concat(
        action.payload.map((provider,index) => ({...provider,key:(index)}))
      );
    },
    [update_providers.fulfilled]:(state,action) => { 
      state.items = action.payload;
    },
    [create_providers.fulfilled]:(state,action) => {
        state.items = state.items.concat(action.payload.map((provider,index) => ({...provider,key:(index)})));
    }
  },
});
 export const { update_provider, new_provider } = providers_Slice.actions;
export default providers_Slice.reducer;
