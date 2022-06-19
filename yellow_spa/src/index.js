import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import gameReducer from "./Redux/gameReducer";
import App from "./App";
import React from "react";
import gameDetailsReducer from "./Redux/gameDetailsReducer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DescriptionPageContainer from "./Components/DescriptionPage/DescriptionPageContainer";
import Search from "./Components/Search/Search";
import mediaReducer from "./Redux/mediaReducer";
import {createRoot} from "react-dom/client";


export const store = configureStore({
  reducer: {
    game: gameReducer,
    details: gameDetailsReducer,
    media: mediaReducer,
  },
});

const container = document.getElementById("root")
const root = createRoot(container);
root.render(
  <Provider store={store}>

      <Router>
        <Search />
        <Routes>
          <Route path="/gamebase/" element={<App />} />
          <Route path="/details/:id" element={<DescriptionPageContainer />} />
        </Routes>
      </Router>

  </Provider>
);


