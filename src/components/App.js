import React from "react";
import GameBoard from "./GameBoard";

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Game Of Life</h1>
				<GameBoard />
			</div>
		);
	}
}

export default App;
