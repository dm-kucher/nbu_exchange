import { configureStore } from '@reduxjs/toolkit'
import ratesReducer from './Slices/RatesSlice'
import datesDateReducer from './Slices/RatesDateSlice'

export const store = configureStore({
  reducer: {
      CurrencyRates: ratesReducer,
      RatesDate: datesDateReducer
  },
})