import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import gameReducer from "./Redux/gameReducer";
import App from "./App";
import React from "react";
import ReactDOM from 'react-dom'
import gameDetailsReducer from "./Redux/gameDetailsReducer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DescriptionPage from "./Components/DescriptionPage";



export const store = configureStore({
    reducer: {
        game: gameReducer,
        details: gameDetailsReducer
    }
})


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes >
                <Route path="/" element={<App />} />
                <Route path="/details/:id" element={<DescriptionPage />} />

            </Routes>
        </Router>
    </Provider>, document.getElementById('root')
);
