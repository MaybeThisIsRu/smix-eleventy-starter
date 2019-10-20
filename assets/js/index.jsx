import React from "react";
import { render } from "react-dom";

import App from "./components/layout/App";

document.addEventListener("DOMContentLoaded", () =>
	render(<App />, document.querySelector("#rApp"))
);
