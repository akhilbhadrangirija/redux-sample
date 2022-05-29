import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:"user",
    initialState:{value:{ name:"",age:0,email:""}},
    reducers:{
        login:(state,action)=>{
            state.value=action.payload;
        },
        updateemail:(state,action)=>{
            state.value=action.payload
        }
    }
    
});
export const {login,updateemail} = userSlice.actions;

export default userSlice.reducer;