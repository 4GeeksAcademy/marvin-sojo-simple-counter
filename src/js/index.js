//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

//render your react application
let counter = 0;
const timeRender = () =>{
    counter = counter + 1;
    ReactDOM.render(<SecondsCounter seconds={counter} />, document.querySelector("#app"));
}

setInterval(timeRender, 1000);