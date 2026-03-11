import React, { lazy, Suspense } from 'react';

const LandingPage = lazy(() => import('./pages/public/LandingPage'));
const LoginPage = lazy(() => import('./pages/public/LoginPage'));
const RegisterPage = lazy(() => import('./pages/public/RegisterPage'));
const DashboardPage = lazy(() => import('./pages/user/DashboardPage'));
const ConverterPage = lazy(() => import('./pages/user/ConverterPage'));
const HistoryPage = lazy(() => import('./pages/user/HistoryPage'));
const ProfilePage = lazy(() => import('./pages/user/ProfilePage'));
const AdminDashboardPage = lazy(() => import('./pages/admin/AdminDashboardPage'));
const UsersPage = lazy(() => import('./pages/admin/UsersPage'));
const ActivityPage = lazy(() => import('./pages/admin/ActivityPage'));

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Suspense fallback={
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  }>
    {children}
  </Suspense>
);

const routes = [
  { path: '/', element: <PageWrapper><LandingPage /></PageWrapper> },
  { path: '/login', element: <PageWrapper><LoginPage /></PageWrapper> },
  { path: '/register', element: <PageWrapper><RegisterPage /></PageWrapper> },
  { path: '/dashboard', element: <PageWrapper><DashboardPage /></PageWrapper> },
  { path: '/dashboard/converter', element: <PageWrapper><ConverterPage /></PageWrapper> },
  { path: '/dashboard/history', element: <PageWrapper><HistoryPage /></PageWrapper> },
  { path: '/dashboard/profile', element: <PageWrapper><ProfilePage /></PageWrapper> },
  { path: '/admin', element: <PageWrapper><AdminDashboardPage /></PageWrapper> },
  { path: '/admin/users', element: <PageWrapper><UsersPage /></PageWrapper> },
  { path: '/admin/activity', element: <PageWrapper><ActivityPage /></PageWrapper> },
];

export default routes;
export { routes };
