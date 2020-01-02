import React, { Component } from "react";
import "./game.css";
// import "antd/dist/antd.css";
import { Icon } from "antd";

// import "../node_modules/font-awesome/css/font-awesome.min.css";
export class App extends Component {
  handle = () => {
    console.log("handle console");
  };

  state = {
    gameState: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ],
    currentPlayer: 1
  };

  getWinner = () => {
    const Tiles = 3;
    let gameArray = this.state.gameState;
    let sum;

    //rows
    for (let i = 0; i < Tiles; i++) {
      sum = gameArray[i][0] + gameArray[i][1] + gameArray[i][2];
      console.log("sum row", sum);
      if (sum == 3) {
        console.log("row won");
        return 1;
      } else if (sum == -3) {
        return -1;
      }
    }

    //columns
    for (let i = 0; i < Tiles; i++) {
      sum = gameArray[0][i] + gameArray[1][i] + gameArray[2][i];
      console.log("some col", sum);
      if (sum == 3) {
        console.log("you won");
        return 1;
      } else if (sum == -3) {
        return -1;
      }
    }

    //diagonals
    sum = gameArray[0][0] + gameArray[1][1] + gameArray[2][2];
    if (sum == 3) {
      return 1;
    } else if (sum == -3) {
      return -1;
    }

    sum = gameArray[2][0] + gameArray[1][1] + gameArray[0][2];
    if (sum == 3) {
      return 1;
    } else if (sum == -3) {
      return -1;
    }

    return 0;
  };

  tileClick = (row, col) => {
    let value = this.state.gameState[row][col];

    if (value !== 0) {
      return;
    }

    let currentPlayer = this.state.currentPlayer;
    let finalGameState = this.state.gameState.slice();
    finalGameState[row][col] = currentPlayer;
    this.setState({ gameState: finalGameState });

    let nextPlayer = currentPlayer == 1 ? -1 : 1;
    this.setState({ currentPlayer: nextPlayer });

    let winner = this.getWinner();
    if (winner == 1) {
      alert("Google is the winner ");
      this.initialGameState();
    } else if (winner == -1) {
      alert("Apple is the winner ");
      this.initialGameState();
    }
  };

  initialGameState = () => {
    this.setState({
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1
    });
  };

  componentDidMount = () => {
    this.initialGameState();
  };

  resetGame = () => {
    this.initialGameState();
  };

  renderIcon = (row, col) => {
    let value = this.state.gameState[row][col];
    switch (value) {
      case 1:
        return (
          <Icon
            type="google"
            theme="outlined"
            style={{ color: "white", fontSize: "50px" }}
          />
        );
      case -1:
        return (
          <Icon
            type="apple"
            theme="outlined"
            style={{ color: "white", fontSize: "50px" }}
          />
        );
      default:
        return "";
    }
  };

  render() {
    return (
      <div
        className="heading"
        style={{
          margin: "100px auto",
          width: "302px",
          height: "300px"
          // border: "1px solid blue"
        }}
      >
        {/* <i className="fab fa-react" s></i> */}

        {/* <Icon type="apple" /> */}
        <h1 style={{ color: "white" }} className="heading">
          {" "}
          Tic-Tac-Toe Game{" "}
        </h1>
        <div
          style={{
            height: "100px"
            // border: "1px solid black"
            // borderBottomWidth: "10px"
          }}
        >
          <button
            className="button1"
            style={{
              width: "100px",
              height: "102px"
            }}
            onClick={() => {
              this.tileClick(0, 0);
            }}
          >
            {this.renderIcon(0, 0)}
          </button>
          <button
            className="button2"
            onClick={() => {
              this.tileClick(0, 1);
            }}
            style={{ width: "100px", height: "102px" }}
          >
            {" "}
            {this.renderIcon(0, 1)}{" "}
          </button>
          <button
            className="button3"
            onClick={() => {
              this.tileClick(0, 2);
            }}
            style={{ width: "100px", height: "102px" }}
          >
            {" "}
            {this.renderIcon(0, 2)}{" "}
          </button>
        </div>

        <div
          style={{
            height: "100px"

            // border: "1px solid black"
          }}
        >
          <button
            className="button4"
            onClick={() => {
              this.tileClick(1, 0);
            }}
            style={{ width: "100px", height: "100px" }}
          >
            {" "}
            {this.renderIcon(1, 0)}{" "}
          </button>
          <button
            className="button5"
            onClick={() => {
              this.tileClick(1, 1);
            }}
            style={{ width: "100px", height: "100px" }}
          >
            {" "}
            {this.renderIcon(1, 1)}{" "}
          </button>
          <button
            className="button6"
            onClick={() => {
              this.tileClick(1, 2);
            }}
            style={{ width: "100px", height: "100px" }}
          >
            {" "}
            {this.renderIcon(1, 2)}{" "}
          </button>
        </div>
        <div
          style={{
            height: "100px"
            // border: "1px solid black"
          }}
        >
          <button
            className="button7"
            onClick={() => {
              this.tileClick(2, 0);
            }}
            style={{ width: "100px", height: "100px" }}
          >
            {" "}
            {this.renderIcon(2, 0)}{" "}
          </button>
          <button
            className="button8"
            onClick={() => {
              this.tileClick(2, 1);
            }}
            style={{ width: "100px", height: "100px" }}
          >
            {" "}
            {this.renderIcon(2, 1)}{" "}
          </button>
          <button
            className="button9"
            onClick={() => {
              this.tileClick(2, 2);
            }}
            style={{ width: "100px", height: "100px" }}
          >
            {" "}
            {this.renderIcon(2, 2)}{" "}
          </button>
        </div>
        <div
          style={{
            margin: "20px auto",
            textAlign: "center"
            // border: "1px solid black"
          }}
        >
          <button className="reset" onClick={this.resetGame}>
            Reset Game
          </button>
        </div>
      </div>
    );
  }
}

export default App;
