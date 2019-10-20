import React from "react";

let Home = () => (
	<div className="flex flex-col">
		<h2>Hi, I'm a starter for an API based React app.</h2>
		<div className="flex flex-row">
			<div className="w-1/4 h-60 pb-6 pr-6">
				<img
					className="w-auto h-full rounded-sm"
					src="https://source.unsplash.com/350x350/?laptop,magazine,desk"
				/>
			</div>
			<div className="w-3/4">
				<p>
					The best thing about me? You can look at the gulp source and
					understand what's up. Oh no, that's not the best part - you
					can make any amends with ease because it's easy to
					understand all these tasks! Take that,{" "}
					<code>create-react-app</code>!
				</p>
				<p>
					We have TailwindCSS with sane-ish defaults. Delete about
					three css files for a clean slate... and boom - you can
					start your next big project without worrying about design
					growth and muddy CSS.
				</p>
			</div>
		</div>
	</div>
);

export default Home;
