import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IntersectObserver from '@/components/common/IntersectObserver';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import routes from './routes';
import { ThemeProvider } from 'next-themes';

const AppRoutes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  );

  return (
    <Routes>
      {routes.map((route, index) => {
        // Simple protection logic
        const isProtected = route.path.startsWith('/dashboard') || route.path.startsWith('/admin');
        const isAdminOnly = route.path.startsWith('/admin');

        if (isProtected && !user) {
          return <Route key={index} path={route.path} element={<Navigate to="/login" replace />} />;
        }

        if (isAdminOnly && user?.role !== 'ADMIN') {
          return <Route key={index} path={route.path} element={<Navigate to="/dashboard" replace />} />;
        }

        return <Route key={index} path={route.path} element={route.element} />;
      })}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>
        <AuthProvider>
          <Router>
            <IntersectObserver />
            <div className="flex flex-col min-h-screen">
              <main className="flex-grow">
                <AppRoutes />
              </main>
            </div>
            <Toaster />
          </Router>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
