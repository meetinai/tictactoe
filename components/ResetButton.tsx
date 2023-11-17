import React from 'react';

interface ResetButtonProps {
  onClick: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
  return (
    <button
      className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
      onClick={onClick}
    >
      Reset Game
    </button>
  );
};

export default ResetButton;