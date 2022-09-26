import React from "react";
import Cell from "./Cell";

const Board = ({ cells, onClick }) => {
  return (
    <div className="game-board">
      {cells.map((item, index) => (
        <Cell
          key={index}
          className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
          value={item}
          onClick={() => onClick(index)}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
