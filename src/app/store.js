import { configureStore } from '@reduxjs/toolkit'
import createScreenReducer from '../slices/createScreenSlice'
import loginScreenReducer from '../slices/loginScreenSlice'
import cardReducer from '../slices/cardSlice'


export default configureStore({
  reducer: {
    createScreen: createScreenReducer,
    loginScreen: loginScreenReducer,
    card: cardReducer,
    
  }
})