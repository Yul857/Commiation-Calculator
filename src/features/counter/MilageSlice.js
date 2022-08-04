import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const milageSlice = createSlice({
  name: 'milageRate',
  initialState,
  reducers: {
    setMilage: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMilage } = milageSlice.actions

export default milageSlice.reducer