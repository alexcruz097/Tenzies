import React from "react";

function Board(props) {
  console.log(props.board);
  return (
    <div className=" grid grid-cols-5 gap-3 my-7">
      {/* iterate true array to show board */}
      {props.board.map((dice) => {
        return (
          <button
            className="bg-slate-200
               px-3 py-2 text-2xl rounded-lg border-black
                "
          >
            {dice.currentNum}
          </button>
        );
      })}
    </div>
  );
}

export default Board;
