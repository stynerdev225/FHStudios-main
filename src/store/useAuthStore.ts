import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  isSubscribed: boolean;
  user: any | null;
  setAuth: (isAuthenticated: boolean, user: any) => void;
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