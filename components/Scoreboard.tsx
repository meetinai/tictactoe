import React from 'react';

interface ScoreboardProps {
  scores: { X: number; O: number };
}

const Scoreboard: React.FC<ScoreboardProps> = ({ scores }) => {
  return (
    <div className="flex justify-between my-4">
      <div className="text-2xl font-bold text-blue-600">Player X: {scores.X}</div>
      <div className="text-2xl font-bold text-blue-600">Player O: {scores.O}</div>
    </div>
  );
};

export default Scoreboard;