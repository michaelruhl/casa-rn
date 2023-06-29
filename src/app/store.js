import { configureStore } from '@reduxjs/toolkit'
import createScreenReducer from '../slices/createScreenSlice'
import loginScreenReducer from '../slices/loginScreenSlice'


export default configureStore({
  reducer: {
    createScreen: createScreenReducer,
    loginScreen: loginScreenReducer,
    
  }
})