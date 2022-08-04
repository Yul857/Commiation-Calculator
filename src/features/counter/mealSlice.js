import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const mealSlice = createSlice({
  name: 'meal',
  initialState,
  reducers: {
    setMeal: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMeal } = mealSlice.actions

export default mealSlice.reducer