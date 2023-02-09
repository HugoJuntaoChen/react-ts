import { configureStore, StoreCreator } from '@reduxjs/toolkit'
import counterSlice from './counter/counterSlice'

export default configureStore({
    reducer: {
        counter: counterSlice
    }
})