import { configureStore, StoreCreator } from '@reduxjs/toolkit'
import counterSlice from './counter/counterSlice'
import headerSlice from './header/headerSlice';

const store = configureStore({
    reducer: {
        counter: counterSlice,
        header: headerSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;