import React from "react";
import Grid from "./Grid";
import { Row, Col, Button, Slider, Icon } from "antd";

class GameBoard extends React.Component {
  state = {
    grid: [], // Nested array of grid columns & rows
    rows: 30, // Number of rows
    columns: 30, // Number of Columns
    refresh: 0, //
    tick: 0, // Number of birth/death refreshes
    refreshSpeed: 1000,
    started: false // Check to see if game is running
  };

  // Load with grid of value 0s
  componentDidMount() {
    this.reset();
  }

  // Create nested array of grid rows & columns
  createGrid() {
    const { rows, columns } = this.state;
    let grid = new Array(columns);
    for (let i = 0; i < grid.length; i++) {
      grid[i] = new Array(rows);
    }
    return grid;
  }

  // Set next tick grid values based on current tick state values
  nextTick = () => {
    let nextTick = this.createGrid();
    const { rows, columns, grid, tick } = this.state;

    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        let currVal = grid[i][j]; // current value of individual grid
        let adjGrids = this.adjacent(grid, i, j); // number of filled adjacent grids

        // Rules 1 + 3 of Game
        if (currVal === 1 && (adjGrids < 2 || adjGrids > 3)) {
          nextTick[i][j] = 0;
        } // Rule 4 of Game
        else if (currVal === 0 && adjGrids === 3) {
          nextTick[i][j] = 1;
        } //Rule 2 of Game
        else {
          nextTick[i][j] = currVal;
        }
      }
    }
    this.setState({ grid: nextTick, tick: tick + 1 }); // Set grid as new Tick and increase tick value
  };

  // Count total value of adjacent grids
  adjacent(grid, x, y) {
    const { rows, columns } = this.state;
    let totalAdj = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let col = (x + i + columns) % columns;
        let row = (y + j + rows) % rows;

        totalAdj += grid[col][row];
      }
    }

    totalAdj -= grid[x][y];
    return totalAdj;
  }

  // Random initial pattern assigns grids with either 0 or 1
  initial() {
    const { grid, rows, columns } = this.state;
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = Math.round(Math.random()); // Assigns random 1 or 0 to grid
      }
    }
    this.setState({ grid });
  }

  // Start game
  start() {
    clearInterval(this.state.refresh);
    const refresh = setInterval(this.nextTick, this.state.refreshSpeed);
    this.setState({ refresh, started: true });
  }

  // Pause game
  pause() {
    clearInterval(this.state.refresh);
    this.setState({ started: false });
  }

  // Fill all grids of columns & rows with value of 0
  reset() {
    const { rows, columns } = this.state;
    let grid = this.createGrid();
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = 0; // Set value of single grid to 0
      }
    }
    this.setState({ grid, tick: 0 }); // Set refreshed grid to state and reset ticks to 0
    this.pause();
  }

  // Click single grid to set value to 1 or 0
  setSingleGrid = (x, y) => {
    const { grid } = this.state;
    grid[x][y] = grid[x][y] ? 0 : 1;
    this.setState({ grid });
  };

  // handle speed input change
  handleSpeedChange = value => {
    this.setState({ refreshSpeed: value });
    this.pause();
  };

  // Switch button btw start and stop
  renderStartStopButton() {
    if (!this.state.started) {
      return (
        <Button onClick={() => this.start()}>
          Start
          <Icon className="control-icon" type="play-circle" />
        </Button>
      );
    } else {
      return (
        <Button onClick={() => this.pause()}>
          Pause
          <Icon className="control-icon" type="pause-circle" />
        </Button>
      );
    }
  }

  render() {
    const { grid, rows, columns, tick } = this.state;
    const ButtonGroup = Button.Group;
    return (
      <div className="gameboard">
        <Row type="flex" justify="center">
          <div className="control">
            <ButtonGroup>
              <Button onClick={() => this.initial()}>
                Seed
                <Icon className="control-icon" type="build" />
              </Button>
              {this.renderStartStopButton()}
              <Button onClick={() => this.nextTick()}>
                Tick
                <Icon className="control-icon" type="fast-forward" />
              </Button>
              <Button onClick={() => this.reset()}>
                Clear
                <Icon className="control-icon" type="table" />
              </Button>
            </ButtonGroup>
          </div>
        </Row>
        <Row type="flex" justify="center">
          <Grid
            grid={grid}
            columns={columns}
            rows={rows}
            setSingleGrid={this.setSingleGrid}
          />
        </Row>
        <div style={{ color: "white", paddingTop: "10px", fontSize: "2.5vh" }}>
          Ticks: {tick}
        </div>
        <Row type="flex" justify="center">
          <Col xs={16}>
            <div className="icon-wrapper">
              <Icon type="minus-circle" />
              <Slider
                min={0}
                max={2000}
                defaultValue={this.state.refreshSpeed}
                step={20}
                tooltipVisible={false}
                onChange={this.handleSpeedChange}
              />
              <Icon type="plus-circle" />
              Refresh Interval
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default GameBoard;
