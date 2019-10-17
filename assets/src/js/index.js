import React from "react";
import { render } from "react-dom";

import App from "./components/App.jsx";

document.addEventListener("DOMContentLoaded", () =>
	render(<App />, document.querySelector("#rApp"))
);
