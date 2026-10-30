import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name : 'counter',
    initialState : {
        value : 0
    },
    reducers : {
        increment : (state) => {
            state.value += 1
        },
        decrement : (state) => {
            state.value -= 1
        },
        IncrementByAmount : (state , num) => {
            state.value += num.payload
        },
        decreaseByAmount : (state , actions)=>{
            state.value -= actions.payload
        }
    }
})

export const { increment , decrement , IncrementByAmount , decreaseByAmount} = counterSlice.actions
export default counterSlice.reducer
