import React, { useState, useEffect } from "react";
import axios from "axios";

const returnText = (text) => {
	if (text === "") {
		return <p>...</p>;
	} else {
		return <p>{text}</p>;
	}
};

let About = () => {
	const [text, setText] = useState("");

	useEffect(() => {
		// Fetch some text
		axios
			.get("https://jsonplaceholder.typicode.com/posts/1")
			.then(response => {
				setText(response.data.body);
				return;
			})
			.catch(error => {
				console.error(error);
			});
	}, [text]); // Only run effect again if value changed

	return (
		<div className="flex flex-col">
			<h2>About</h2>
			<div className="flex flex-row">
				<div className="w-1/4 h-60 pb-6 pr-6">
					<img
						className="w-auto h-full rounded-sm"
						src="https://source.unsplash.com/350x350/?happy,person"
					/>
				</div>
				<div className="w-3/4">
					<p>
						<strike>
							Err... a picture speaks a thousand words?
						</strike>
					</p>
					{returnText(text)}
				</div>
			</div>
		</div>
	);
};

export default About;
