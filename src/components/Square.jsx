export function Square({ index, updateBoard, children }) {
  return (
    <button className="square" onClick={() => updateBoard(index)}>
      {children}
    </button>
  );
}
