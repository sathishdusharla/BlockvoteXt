import { Link } from 'react-router-dom';
import { Vote } from 'lucide-react';
import { LoginForm } from '../components/auth/LoginForm';
import { AnimatedBackground } from '../components/layout/AnimatedBackground';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-20 pb-12 flex flex-col">
      <AnimatedBackground />

      <div className="flex-grow container mx-auto px-4 flex items-center justify-center relative z-10">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Vote className="h-16 w-16 text-blue-500 animate-pulse" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-gray-400">Login to access your voting dashboard</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-slate-700/50 transform hover:scale-[1.01] transition-all duration-300">
            <LoginForm />

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Don't have an account?{' '}
                <Link 
                  to="/voter-registration" 
                  className="text-blue-500 hover:text-blue-400 font-medium transition-colors duration-300"
                >
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoterRegistration;
