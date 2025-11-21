import { useState } from "react";

function Board(props) {
  const [winningNumber, setWinningNumber] = useState("");

  // const style

  // function to see if it is a winner
  function isWinner(arr, propName) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return true; // An empty array or non-array technically has all properties "equal"
    }

    const firstValue = arr[0][propName]; // Get the value of the property from the first object

    // Use Array.every() to check if all subsequent objects have the same value
    return arr.every((obj) => obj[propName] === firstValue);
  }
  // check if we have a winner
  if (isWinner(props.board, "numberHold") && winningNumber !== "") {
    props.setIsWinner(true);
  }
  // update holdButton
  function holdButton(dice) {
    // create initail winning number
    if (winningNumber === "") {
      // set the current winning number
      setWinningNumber(dice.currentNum);

      // set the numbers
      props.setBoard((prevBoard) => {
        return prevBoard.map((block) => {
          if (block.id === dice.id) {
            return { ...block, numberHold: true };
          } // Return the original object for other elements


          
          return block;
        });
      });
    }
   
    // change numberHold to true only if initial number is equal to winning number
    if (winningNumber === dice.currentNum) {
      props.setBoard((prevBoard) => {
        return prevBoard.map((block) => {
          if (block.id === dice.id) {
            return { ...block, numberHold: true };
          } // Return the original object for other elements
          return block;
        });
      });
      // check to see if it is the winning number
    }
  }

  return (
    <div className=" grid grid-cols-5 gap-3 my-7">
      {/* iterate thru array to show board of 10*/}
      {props.board.map((dice) => {
        return (
          // check if number is on hold
          <button
            id="board-cell"
            className={dice.numberHold ? "bg-green-400" : "bg-slate-200"}
            onClick={function () {
              holdButton(dice);
            }}
            key={dice.id}
          >
            {dice.currentNum}
          </button>
        );
      })}
    </div>
  );
}

export default Board;
