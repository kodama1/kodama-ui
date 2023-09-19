// src/components/Button.tsx

import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  label?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
