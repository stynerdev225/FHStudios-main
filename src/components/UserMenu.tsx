
import { useState } from 'react';
import { User, LogOut, Music, Settings, Crown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, isSubscribed, user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <Link
        to="/login"
        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full text-white font-bold transition whitespace-nowrap"
      >
        <User size={20} />
        Sign In
      </Link>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-full transition"
      >
        <User size={20} />
        <span className="hidden md:inline">My Account</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-zinc-800 rounded-xl shadow-xl py-2 z-50">
          <div className="px-4 py-3 border-b border-zinc-700">
            <p className="font-bold">{user?.name}</p>
            <p className="text-sm text-gray-400">
              {isSubscribed ? 'Premium Subscriber' : 'Free Account'}
            </p>
          </div>

          <div className="py-2">
            <Link
              to="/listen"
              className="flex items-center gap-3 px-4 py-2 hover:bg-zinc-700 transition"
              onClick={() => setIsOpen(false)}
            >
              <Music size={18} />
              My Music
            </Link>
            {!isSubscribed && (
              <Link
                to="/subscription"
                className="flex items-center gap-3 px-4 py-2 hover:bg-zinc-700 transition"
                onClick={() => setIsOpen(false)}
              >
                <Crown size={18} className="text-yellow-500" />
                Upgrade to Premium
              </Link>
            )}
            <Link
              to="/settings"
              className="flex items-center gap-3 px-4 py-2 hover:bg-zinc-700 transition"
              onClick={() => setIsOpen(false)}
            >
              <Settings size={18} />
              Settings
            </Link>
          </div>

          <div className="border-t border-zinc-700 pt-2">
            <button
              className="flex items-center gap-3 px-4 py-2 w-full text-left hover:bg-zinc-700 transition text-red-500"
              onClick={handleLogout}
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

