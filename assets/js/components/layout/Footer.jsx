import React from "react";
import { Link } from "react-router-dom";

let Footer = () => (
	<footer className="container">
		<div className="flex flex-row justify-between">
			<Link to="/privacy-policy">Privacy Policy</Link>
			<p>&copy; RuSi 2019</p>
		</div>
	</footer>
);

export default Footer;
