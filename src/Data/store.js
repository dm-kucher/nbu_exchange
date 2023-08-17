import { configureStore } from '@reduxjs/toolkit'
import ratesReducer from './Slices/RatesSlice'
import datesDateReducer from './Slices/RatesDateSlice'
import CurrencyHistoryReducer from "./Slices/CurrencyHistory";

export const store = configureStore({
  reducer: {
      CurrencyRates: ratesReducer,
      RatesDate: datesDateReducer,
      CurrencyHistory: CurrencyHistoryReducer,
  },
})