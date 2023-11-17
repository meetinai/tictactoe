import React from 'react';
import Cell from './Cell';

interface BoardProps {
  cells: ('X' | 'O' | null)[];
  onClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ cells, onClick }) => {
  return (
    <div className="flex flex-wrap justify-center w-60">
      {cells.map((value, index) => (
        <Cell key={index} value={value} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

export default Board;