import { configureStore } from '@reduxjs/toolkit'
import songReducer from './song'

const Redux_Store = configureStore({
  reducer: {
    song: songReducer,
  },
})

export default Redux_Store
