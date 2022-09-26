// eslint-disable-next-line
import React, { useReducer, useState } from "react";
import { calculateWinner } from "../../helpers";
import Board from "./Board";
import "./GameStyles.css";

const initializeValue = {
  board: Array(9).fill(null),
  isXNext: true,
};
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, isXNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = isXNext ? "X" : "O";
      nextState.isXNext = !nextState.isXNext;
      return nextState;
    }

    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      return nextState;
    }
    default:
      break;
  }
  return state;
};

const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, initializeValue);
  //   //   const [board, setBoard] = useState(Array(9).fill(null));
  //   //   const [isXNext, setIsXNext] = useState(true);
  //   const [state, setState] = useState({
  //     board: Array(9).fill(null),
  //     isXNext: true,
  //     name: "tranvandat",
  //   });

  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    // const boardCopy = [...state.board];
    // if (winner || boardCopy[index]) return;
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
    // boardCopy[index] = state.isXNext ? "X" : "O";

    // setState({
    //   ...state,
    //   board: boardCopy,
    //   isXNext: !state.isXNext,
    // });
    // setBoard(boardCopy);
    // setIsXNext(!isXNext);
  };
  const handleReset = () => {
    // setBoard(Array(9).fill(null));

    dispatch({
      type: "RESET",
    });
  };
  return (
    <div className="wrapper-game">
      <Board cells={state.board} onClick={handleClick}></Board>
      <div>
        <div>
          {winner && (
            <p
              className={`game-winner game-winner-${winner}`}
            >{`YouWinner ${winner}`}</p>
          )}
        </div>
        <button
          onClick={handleReset}
          className={`game-reset game-reset-${winner}`}
        >
          Reset game
        </button>
      </div>
    </div>
  );
};

export default Game;
