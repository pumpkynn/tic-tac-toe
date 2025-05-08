import Board from './Board';
import { useState } from 'react';
//包含游戏逻辑
//useState是钩子函数，允许我们在函数组件中添加和管理状态
export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }
    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }
    function handleRestart() {
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
    }
    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Start game';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    });
    return (
        <div className="game">

            <div className="game-board">
                <button onClick={handleRestart}>Restart Game</button>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />

            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );

}
