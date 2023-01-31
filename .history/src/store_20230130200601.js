import { configureStore } from '@reduxjs/toolkit'
import {count}
export const store = configureStore({
  reducer: {
    counter:counterReducer
  },
})