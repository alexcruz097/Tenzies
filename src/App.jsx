import { useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  const [board, setBoard] = useState([
    {
      id: 0,
      currentNum: 0,
      numberHold: false,
    },
    {
      id: 1,
      currentNum: 1,
      numberHold: false,
    },
    {
      id: 2,
      currentNum: 2,
      numberHold: false,
    },
    {
      id: 3,
      currentNum: 3,
      numberHold: false,
    },
    {
      id: 4,
      currentNum: 4,
      numberHold: false,
    },
    {
      id: 5,
      currentNum: 5,
      numberHold: false,
    },
    {
      id: 6,
      currentNum: 6,
      numberHold: false,
    },
    {
      id: 7,
      currentNum: 7,
      numberHold: false,
    },
    {
      id: 8,
      currentNum: 8,
      numberHold: false,
    },
    {
      id: 9,
      currentNum: 9,
      numberHold: false,
    },
  ]);

  const [isWinner, setIsWinner] = useState(false);
  const [numTries, setNumTries] = useState(0);

  // roll new dice

  function rollNewNum() {

    // create new num of tries
    setNumTries((prevTries) => {
      return prevTries + 1;
    });
    // update num
    setBoard((prevBoard) => {
      return prevBoard.map((dice) => {
        if (dice.numberHold !== true) {
          return {
            ...dice,
            currentNum: Math.floor(Math.random() * board.length),
          };
        }
        // return old
        return dice;
      });
    });
  }

 
  return (
    <div className="page flex justify-center content-center">
      <div className="flex flex-col items-center ">
        <Header />
        <p>Number of Tries: {numTries}</p>
        <Board board={board} setBoard={setBoard} setIsWinner={setIsWinner}/>
        <button
          onClick={rollNewNum}
          className=" bg-violet-600 text-white align px-8 py-1 rounded-lg"
        >
         {isWinner? "Play Again": "Roll"} 
        </button>
      </div>
    </div>
  );
}

export default App;
