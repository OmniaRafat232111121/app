import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
export const store = configureStore({
  reducer: {
    counter:counterReducer
  },
  <i class="fa fa-deviantart" aria-hidden="true"></i>
})