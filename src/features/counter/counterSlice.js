import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    count:0
}

export const counterSlice =createSlice({

    name:'counter',
    initialState,

    // // we have many actions received in reducer

    reducers:{          // this object have many anonymous func 
        increment:(state)=>{  // this anonymous func will receive a state
            state.count +=1;  // here count state is defined above  consider as old state and will updated with new state

        },
        decrement:(state)=>{  // this anonymous func will receive a state
            state.count -=1;  // here count state is defined above


        },
        reset:(state) =>{
            state.count = 0
        },
        incrementByAmount:(state,action)=>{   // here incrementByAmount action will state and  action (action will contains payload)
            state.count += action.payload;     //  here payload contains value inside
        }
    }    
});

export const {increment ,decrement,reset,incrementByAmount} = counterSlice.actions   // here we will destrcuture increment ,decrement actions from counterSlice action 

export default counterSlice.reducer;  // we export this coz we need in store