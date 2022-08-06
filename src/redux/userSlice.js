import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:{},

};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

    getUser:(state,actions)=>{
      state.user=actions.payload
    }
  },
});

export const {logIn,logOut,getUser}=userSlice.actions
export default userSlice.reducer;