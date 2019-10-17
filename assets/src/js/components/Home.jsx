import React from "react";

let Home = () => (
	<div className="flex flex-row">
		<div className="order-1 w-3/4 flex flex-col">
			<h2>Hi, I'm a starter project.</h2>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Voluptatum, deserunt quis at vero suscipit voluptas expedita
				quibusdam odit ipsam cum officia totam adipisci nisi iure minus
				inventore temporibus eos. Saepe.
			</p>
		</div>
		<div className="order-0 w-1/3 h-auto pb-6 pr-6">
			<img className="w-full h-auto" src="https://source.unsplash.com/350x350/?laptop,magazine" />
		</div>
	</div>
);

export default Home;
