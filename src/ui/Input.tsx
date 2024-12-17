import { InputHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: LucideIcon;
}

export const Input = ({ label, icon: Icon, className = '', ...props }: InputProps) => {
  return (
    <div className="group">
      <label 
        htmlFor={props.id} 
        className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2"
      >
        {Icon && <Icon className="h-4 w-4" />}
        {label}
      </label>
      <input
        {...props}
        className={`w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 
                   text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 
                   transition-all duration-300 ${className}`}
      />
    </div>
  );
};
