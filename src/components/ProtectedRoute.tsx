import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiresSubscription?: boolean;
}

export function ProtectedRoute({ children, requiresSubscription = false }: ProtectedRouteProps) {
  const { isAuthenticated, isSubscribed } = useAuthStore();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiresSubscription && !isSubscribed) {
    return <Navigate to="/subscription" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}