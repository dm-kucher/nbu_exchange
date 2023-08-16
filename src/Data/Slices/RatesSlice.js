import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rates: [],
}

export const RatesSlice = createSlice({
    name: 'CurrencyRates',
    initialState,
    reducers:{
        setRates: (state,action) => {
            // alert('setRates')
            return {...state, rates: [...action.payload]}
            // state.rates = action.payload;
        }
    }
})

export const { setRates} = RatesSlice.actions

export default RatesSlice.reducer