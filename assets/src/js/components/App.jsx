import React from "react";

import Header from "./Header.jsx";
import Hello from "./Hello.jsx";
import Footer from "./Footer.jsx";

class App extends React.Component {
	render() {
		return (
			<div className="body-holder">
				<Header />
				<main class="container">
					<Hello />
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
