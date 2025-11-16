import { useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  const [board, setBoard] = useState([
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
    {
      id: 10,
      currentNum: 10,
      numberHold: false,
    },
  ]);
  return (
    <div className="page flex justify-center content-center">
      <div className="flex flex-col items-center ">
        <Header />
        <Board board={board}/>
        <button className="bg-violet-600 text-white align px-8 py-1 rounded-lg">
          Roll
        </button>
      </div>
    </div>
  );
}

export default App;
