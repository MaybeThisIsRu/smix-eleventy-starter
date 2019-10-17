import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App.jsx";

document.addEventListener("DOMContentLoaded", function(event) {
	ReactDOM.render(<App />, document.querySelector("#rApp"));
});
