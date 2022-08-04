import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import mealReducer from '../features/counter/mealSlice'
import MilageReducer from '../features/counter/MilageSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    meal: mealReducer,
    milage: MilageReducer,
  },
})