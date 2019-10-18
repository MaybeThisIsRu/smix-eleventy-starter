import React from "react";
import { Link } from "react-router-dom";

let Header = () => (
	<header className="container">
		<h1 className="mb-4 lg:mb-8">React on Gulp Starter</h1>

		<nav>
			<Link to="/">Home</Link>
			<Link to="about">About</Link>
		</nav>

		<hr/>
	</header>
);

export default Header;
