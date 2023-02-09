import React from 'react';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from '@/redux/store';
export function App() {
    return (
        <Provider store={store}>
            <Header />
            <div>123</div>
        </Provider>
    )
}

