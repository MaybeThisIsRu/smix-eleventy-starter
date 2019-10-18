import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import Home from "./Home";
import About from "./About";

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
