import { WinnerOptions } from "../constant";
export function checkWinner(boardToCheck) {
  for (const combo of WinnerOptions) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[b] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
}

export const checkEndGame = (newboard) => {
  return newboard.every((square) => square != null);
};
