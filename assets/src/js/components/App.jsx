import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import Home from "./Home.jsx";
import About from "./About.jsx";

let App = () => (
	<div className="body-holder">
		<Router>
			<Header />
			<main className="container">
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</main>
			<Footer />
		</Router>
	</div>
);

export default App;
