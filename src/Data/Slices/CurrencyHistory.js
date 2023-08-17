import {createSlice} from "@reduxjs/toolkit";

let date = new Date();

const initialState = {
    period: [date.setDate(date.getDate() - 1), new Date()],
    currency: undefined,
    rates: []
}

export const CurrencyHistory = createSlice(
    {
        name: 'CurrencyHistory',
        initialState,
        reducers: {
            setCurrency: (state, action) => {
                return {...state, currency: action.payload}
            },
            setPeriod: (state, action) => {
                return {...state, period: action.payload}
            },
            setRates: (state, action) => {
                return {...state, rates: action.payload}
            }
        }
    })

export const {setCurrency, setPeriod, setRates} = CurrencyHistory.actions
export default CurrencyHistory.reducer