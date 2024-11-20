export const resetGame = (setBoard, setTurn, setWinner, turns) => {
  setBoard(Array(9).fill(null));
  setTurn(turns.x);
  setWinner(null);

  window.localStorage.removeItem("partida");
  window.localStorage.removeItem("turno");
};
