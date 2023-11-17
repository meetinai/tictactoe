import React, { useState } from 'react';
import Board from '../components/Board';
import Scoreboard from '../components/Scoreboard';
import ResetButton from '../components/ResetButton';

const checkWinner = (cells: ('X' | 'O' | null)[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
};

const Home: React.FC = () => {
  const [cells, setCells] = useState<Array<'X' | 'O' | null>>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [scores, setScores] = useState<{ X: number; O: number }>({ X: 0, O: 0 });

  const handleClick = (index: number) => {
    const newCells = cells.slice();
    if (checkWinner(newCells) || newCells[index]) {
      return;
    }
    newCells[index] = xIsNext ? 'X' : 'O';
    setCells(newCells);
    setXIsNext(!xIsNext);

    const winner = checkWinner(newCells);
    if (winner) {
      setScores({ ...scores, [winner]: scores[winner] + 1 });
    }
  };

  const resetGame = () => {
    setCells(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold text-blue-600">Tic Tac Toe Game</h1>
      <Scoreboard scores={scores} />
      <Board cells={cells} onClick={handleClick} />
      <ResetButton onClick={resetGame} />
    </div>
  );
};

export default Home;