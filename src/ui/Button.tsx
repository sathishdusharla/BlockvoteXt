import { ReactNode } from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  type = 'button',
  disabled = false,
  children,
  className = '',
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium
                 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98] 
                 disabled:opacity-70 disabled:cursor-not-allowed
                 transition-all duration-300 relative group ${className}`}
    >
      {children}
    </button>
  );
};
