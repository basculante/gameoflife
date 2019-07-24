import React from "react";
import GameBoard from "./GameBoard";
import Explanation from "./Explanation";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<h1 className="app-title">CONWAY'S GAME OF LIFE</h1>
				<GameBoard />
				<Explanation />
			</div>
		);
	}
}

export default App;
