import React from "react";

let Home = () => (
	<div className="flex flex-col">
		<div className="h-60 w-full pb-6 pr-6">
			<img
				className="w-full h-auto rounded-sm"
				src="https://source.unsplash.com/2560x700/?laptop,magazine,desk"
			/>
		</div>
		<h2 className="">Hi, I'm a starter for an API based React app.</h2>
		<p>
			Please see the <a href="https://github.com/hirusi/react-on-gulp-starter/blob/develop/README.md" target="_blank" rel="noreferrer noopener">readme</a> on GitHub for more details.
		</p>
	</div>
);

export default Home;
