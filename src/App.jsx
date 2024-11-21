import { useState } from "react";
import { Square } from "./components/Square";
import { turns } from "./constant";
import "./Style/index.css";
import { checkEndGame, checkWinner } from "./helpers/checkWinner";
import { Winner } from "./components/Winner";

export function App() {
  // const [board, setBoard] = useState(() => {
  //   const boardFromStorage = window.localStorage.getItem("partida");
  //   return boardFromStorage
  //     ? JSON.parse(boardFromStorage)
  //     : Array(9).fill(null);
  // });
  // const [turn, setTurn] = useState(() => {
  //   const turnFromStorage = window.localStorage.getItem("turno");
  //   return turnFromStorage ?? turns.x;
  // });

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(turns.x);
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === turns.x ? turns.o : turns.x;
    setTurn(newTurn);
    // window.localStorage.setItem("partida", JSON.stringify(newBoard));
    // window.localStorage.setItem("turno", newTurn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Ta Te Ti</h1>
      <section className="game">
        {board.map((square, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {square}
          </Square>
        ))}
      </section>
      <section className="turn">
        <Square isSelected={turn === turns.x}>{turns.x}</Square>
        <Square isSelected={turn === turns.o}>{turns.o}</Square>
      </section>
      <Winner
        winner={winner}
        setBoard={setBoard}
        setTurn={setTurn}
        setWinner={setWinner}
        turns={turns}
      />
    </main>
  );
}
