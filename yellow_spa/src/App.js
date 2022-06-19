import React from "react";
import "../src/Components/DescriptionPage/Slider.css"
import "./index.css";
import Filters from "./Components/Filters/Filters";
import GlobalMain from "./Components/MainApp/GlobalMain";
import useMediaControl from "./hooks/useMediaControl";

function App() {
    const pageSize = 15; //pageSize for all project

    return (
        <>
            <Filters/>
            <GlobalMain pageSize={pageSize}/>
        </>
    );
}

export default App;
