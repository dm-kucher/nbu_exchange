import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    rDate: new Date()
}

export const RatesDateSlice = createSlice({
    name: 'RatesDate',
    initialState,
    reducers: {
        setRatesDate: (state, action) => {
            // alert('setRatesDate')
            return {...state, rDate: action.payload}
        }
    }
})

export const { setRatesDate} = RatesDateSlice.actions

export default RatesDateSlice.reducer