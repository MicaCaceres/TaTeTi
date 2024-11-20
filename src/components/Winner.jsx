import "../Style/index.css";
import "../Style/App.css";
import { Square } from "./Square";
import { resetGame } from "../helpers/resetGame";

// eslint-disable-next-line react/prop-types
export function Winner({ winner, setBoard, setTurn, setWinner, turns }) {
  if (winner === null) return null;

  const winnerText = winner === false ? "Empate" : "Ganó";

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button
            onClick={() => resetGame(setBoard, setTurn, setWinner, turns)}
          >
            Empezar de nuevo
          </button>
        </footer>
      </div>
    </section>
  );
}
