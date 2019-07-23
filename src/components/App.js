import React from "react";
import GameBoard from "./GameBoard";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<h1 className="app-title">CONWAY'S GAME OF LIFE</h1>
				<GameBoard />
			</div>
		);
	}
}

export default App;
