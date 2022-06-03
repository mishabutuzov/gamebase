import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import gameReducer from "./Redux/gameReducer";
import App from "./App";
import React from "react";
import ReactDOM from 'react-dom'



export const store = configureStore({
    reducer: {
        game: gameReducer
    }
})


ReactDOM.render(
    <Provider store={store}>
        <App/>
        {/*<Hook2/>*/}
    </Provider>, document.getElementById('root')
);

