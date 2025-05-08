export default function Square({value,onSquareClick}) {
    return <button className="square"
    onClick={onSquareClick}>
        {value}
    </button>
}
//每个小格子