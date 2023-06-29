import { createSlice } from '@reduxjs/toolkit'

export const loginScreenSlice = createSlice({
  name: 'loginScreen',
  initialState: {
    isLoading: false,
   
  },
  reducers: {
    loadCases: (state) => {
      return {
        ...state,
        isLoading: state.isLoading = !state.isLoading
      };
    },

    

  }
})

// Action creators are generated for each case reducer function
export const { loadCases } = loginScreenSlice.actions

export default loginScreenSlice.reducer