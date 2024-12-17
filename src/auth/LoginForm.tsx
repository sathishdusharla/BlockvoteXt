import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail, UserCheck } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useAuth } from '../../hooks/useAuth';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login, isLoading, message } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const success = await login(formData);
    if (success) {
      setTimeout(() => {
        navigate(`/voter_dashboard?email=${formData.email}`);
      }, 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        type="email"
        id="email"
        label="Email Address"
        icon={Mail}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Enter your email"
        required
      />

      <div className="group">
        <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
          <Lock className="h-4 w-4" />
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <Button type="submit" disabled={isLoading}>
        <span className={`flex items-center justify-center gap-2 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <UserCheck className="h-5 w-5" />
          Login
        </span>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </Button>

      {message && (
        <div className={`mt-4 p-3 rounded-lg text-center ${
          message.includes('success') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
        } animate-fadeIn`}>
          {message}
        </div>
      )}
    </form>
  );
};
