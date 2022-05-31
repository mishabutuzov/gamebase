import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DescriptionPage from "./Components/DescriptionPage";

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
      <DescriptionPage/>
  </React.StrictMode>,
  document.getElementById('root')
);
