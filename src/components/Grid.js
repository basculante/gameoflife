import React from "react";

class Grid extends React.Component {
	render() {
		const { grid, setSingleGrid } = this.props;
		let display = grid.map((row, j) =>
			row.map((col, i) => (
				<div
					className={`Box ${grid[i][j] ? "isActive" : ""}`}
					onClick={e => setSingleGrid(i, j)}
					key={`${i}_${j}`}
				/>
			))
		);

		return (
			<div
				className="Grid"
				style={{
					width: this.props.columns * 14
				}}
			>
				{display}
			</div>
		);
	}
}

export default Grid;
