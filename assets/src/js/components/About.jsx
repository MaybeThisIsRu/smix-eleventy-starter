import React from "react";

let About = () => (
	<div className="flex flex-row">
		<div className="order-1 w-3/4 flex flex-col">
			<h2>About</h2>
			<p>I did this because <code>create-react-app</code> is dark arts.</p>
		</div>
		<div className="order-0 w-1/3 h-auto pb-6 pr-6">
			<img className="w-full h-auto" src="https://source.unsplash.com/350x350/?person" />
		</div>
	</div>
);
export default About;
