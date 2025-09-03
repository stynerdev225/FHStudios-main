import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
  [key: string]: unknown;
}

interface AuthState {
  isAuthenticated: boolean;
  isSubscribed: boolean;
  user: User | null;
  setAuth: (isAuthenticated: boolean, user: User) => void;
  setSubscription: (isSubscribed: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  isSubscribed: false,
  user: null,
  setAuth: (isAuthenticated, user) => set({ isAuthenticated, user }),
  setSubscription: (isSubscribed) => set({ isSubscribed }),
  logout: () => set({ isAuthenticated: false, isSubscribed: false, user: null }),
}));