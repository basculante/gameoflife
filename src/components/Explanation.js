import React from "react";
import { Row } from "antd";

const Explanation = () => {
  return (
    <div className="explanation-container">
      <Row type="flex" justify="center">
        <div className="explanation-content">
          <h1 style={{ paddingTop: "40px" }}>How it Works</h1>
          <h2>State Values</h2>
          <div>
            <img
              className="explanation-content-image"
              src={require("./images/state.png")}
              alt="state"
            />
          </div>
          <div className="explanation-content-text">
            The premise of this game is essentially working with a 2D array. The
            state of grid initializes as an empty array but will eventually hold
            a nested array representing the columns and rows filled with either
            0's or 1's to show the dead or alive "boxes". The state values of
            rows and columns represent the number of rows and columns in the
            grid. The refresh state value uses the setInterval function to
            initiate each tick refresh and the refresh speed. The tick value is
            the number of times the apps iterates through the game to update the
            next grid state based on the previous grid state. The started state
            value indicates whether the game has been started.
          </div>
        </div>
      </Row>
      <Row type="flex" justify="center">
        <div className="explanation-content">
          <h2>Create Grid</h2>
          <div>
            <img
              className="explanation-content-image"
              src={require("./images/createGrid.png")}
              alt="create-grid"
            />
          </div>
          <div className="explanation-content-text">
            This function sets the empty grid array with a nested array of
            columns and rows based on the columns and rows state values. This is
            used to represent the grid gameboard.
          </div>
        </div>
      </Row>
      <Row type="flex" justify="center">
        <div className="explanation-content">
          <h2>Reset & Mount</h2>
          <div>
            <img
              className="explanation-content-image"
              src={require("./images/reset.png")}
              alt="reset"
            />
          </div>
          <div>
            <img
              className="explanation-content-image"
              src={require("./images/componentDidMount.png")}
              alt="cdm"
            />
          </div>
          <div>
            <img
              className="explanation-content-image"
              src={require("./images/array.png")}
              alt="array"
            />
          </div>
          <div className="explanation-content-text">
            The reset function is initiated when the app is loaded through
            React's componentDidMount lifecycle method. The callback function
            creates our empty grid array of nested columns and rows and fills
            each "box" with a starting value of 0, or dead. This is the empty
            starting gameboard.
          </div>
        </div>
      </Row>
      <Row type="flex" justify="center">
        <div className="explanation-content">
          <h2>Ticks</h2>
          <div>
            <img
              className="explanation-content-image"
              src={require("./images/nextTick.png")}
              alt="tick"
            />
          </div>
          <div className="explanation-content-text">
            Each refresh of the gameboard is called a tick. Each tick takes the
            values of the current grid and creates a new grid with new values
            based on the rules of the game. The function uses if/else statements
            to determine whether a cell is dead or alive in the next tick using
            game rules. Once the values of the next grid are determined, the
            function sets the new grid state and updates the tick counter. This
            function is called with the setInterval function in the start
            function so that the game continues to run until it is paused.
          </div>
        </div>
      </Row>
      <Row type="flex" justify="center">
        <div className="explanation-content">
          <h2>Adjacent Grids</h2>
          <div>
            <img
              className="explanation-content-image"
              src={require("./images/adjacent.png")}
              alt="adjacent1"
            />
          </div>
          <div>
            <img
              className="explanation-content-image"
              src={require("./images/algorithm.png")}
              alt="adjacent2"
            />
          </div>
          <div className="explanation-content-text">
            This function iterates through the adjacent grids of the current
            grid starting with the top left corner. It takes the values of the
            adjacent grids (0 or 1) and sums up the total value of all them. The
            modulus operator (%) used in this function returns -1 when used on a
            value of -1. Therefore, an additional column/row value is added to
            make sure that the values will be positive. Since this function also
            takes into account the current selected grid, it subtracts that
            value from the total sum to get the values of only the grids next to
            it. This value can then be used to calculate whether a grid should
            live or die based on the rules of the game. It must be noted that
            this function assumes that the grid edges are wrapped around, not
            finite, so the game interacts with edges that are considered to wrap
            around.
          </div>
        </div>
      </Row>
      <Row type="flex" justify="center">
        <div className="explanation-content">
          <h2>Initial Seed</h2>
          <div>
            <img
              className="explanation-content-image"
              src={require("./images/initial.png")}
              alt="initial"
            />
          </div>
          <div className="explanation-content-text">
            The initial function creates a random starting gameboard. It takes
            the initialized grid filled with 0's and uses the Math.random and
            Math.round function to generate either 0's or 1's to set for each
            grid "box".
          </div>
        </div>
      </Row>
      <Row type="flex" justify="center">
        <div className="explanation-content">
          <h2>Start & Pause</h2>
          <div>
            <img
              className="explanation-content-image"
              src={require("./images/start-pause.png")}
              alt="start-pause"
            />
          </div>
          <div className="explanation-content-text">
            The start function uses the setInterval function to initiate the
            next tick at specified time intervals. This is how the gameboard is
            constantly updated with the new grid state. The interval speed is
            determined by the refresh speed state and can be changed by the
            interval slider. The pause function clears the current refresh set
            interval to stop the game from running the next tick function. Both
            functions also change the started state value between true and false
            to show whether the game is running or not.
          </div>
        </div>
      </Row>
      <Row type="flex" justify="center">
        <div className="explanation-content">
          <h2>Select/Render Grid Box</h2>
          <div>
            <img
              className="explanation-content-image"
              src={require("./images/setSingleGrid.png")}
              alt="single-grid"
            />
          </div>
          <div>
            <img
              className="explanation-content-image"
              src={require("./images/renderGrid.png")}
              alt="render-grid"
            />
          </div>
          <div className="explanation-content-text">
            Each single grid "box" is toggled between alive or dead using the
            setSingleGrid function. This function is passed as a prop to our
            Grid component to toggle between 0 and 1 on click. A ternary
            operator is used in className to show an active or non active grid
            box based on the current value of the mapped grid box. Along with
            this function, the current grid state and columns state are passed
            as props as well to map and render out the gameboard grid.
          </div>
        </div>
      </Row>
      <Row type="flex" justify="center">
        <div className="explanation-content">
          <h2>Interval Slider</h2>
          <div>
            <img
              className="explanation-content-image"
              src={require("./images/handleSpeedChange.png")}
              alt="speed-change"
            />
          </div>
          <div className="explanation-content-text">
            This function takes the current value from the slider and sets it as
            the new state value of refreshSpeed.
          </div>
        </div>
      </Row>
      <Row type="flex" justify="center">
        <div className="explanation-content">
          <h2>Render Start/Stop</h2>
          <div>
            <img
              className="explanation-content-image"
              src={require("./images/renderButton.png")}
              alt="button"
            />
          </div>
          <div className="explanation-content-text">
            This function renders either a start or stop button based on the
            current state value of started. If started is false, the start
            button is rendered, else the pause button is rendered.
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Explanation;
