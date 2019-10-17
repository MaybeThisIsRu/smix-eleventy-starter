import React from "react";

class Hello extends React.Component {
	render() {
		return (
			<div className="flex flex-row">
				<div className="order-1 flex-grow flex flex-col">
					<h1>Hi, I'm a starter project.</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Voluptatum, deserunt quis at vero suscipit
						voluptas expedita quibusdam odit ipsam cum officia totam
						adipisci nisi iure minus inventore temporibus eos.
						Saepe.
					</p>
				</div>
				<div className="order-0 w-1/3 h-auto p-6">
					<img
						src="https://source.unsplash.com/1000x1000/?laptop,magazine"
					/>
				</div>
			</div>
		);
	}
}

export default Hello;
