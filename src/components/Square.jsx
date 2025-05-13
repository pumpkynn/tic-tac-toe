export default function Square({ value, onSquareClick, isWinner }) {
    return (
        <button
            className={`square ${isWinner ? 'winner' : ''}`}
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}
//每个小格子