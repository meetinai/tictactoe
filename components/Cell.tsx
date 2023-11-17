import React from 'react';

interface CellProps {
  value: 'X' | 'O' | null;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
  return (
    <button
      className="w-20 h-20 border-2 border-gray-300 rounded-md text-4xl font-bold text-center text-blue-600 hover:bg-blue-100 focus:outline-none"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Cell;