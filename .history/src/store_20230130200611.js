import { configureStore } from '@reduxjs/toolkit'
import {counterReducer} from './co'
export const store = configureStore({
  reducer: {
    counter:counterReducer
  },
})