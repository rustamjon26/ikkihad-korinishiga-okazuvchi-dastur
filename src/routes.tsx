import React, { lazy, Suspense } from "react";
import LandingPage from "./pages/public/LandingPage";
import DashboardPage from "./pages/user/DashboardPage";

const ConverterPage = lazy(() => import("./pages/user/ConverterPage"));
const HistoryPage = lazy(() => import("./pages/user/HistoryPage"));
const ProfilePage = lazy(() => import("./pages/user/ProfilePage"));

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Suspense
    fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    }
  >
    {children}
  </Suspense>
);

const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/dashboard/converter",
    element: (
      <PageWrapper>
        <ConverterPage />
      </PageWrapper>
    ),
  },
  {
    path: "/dashboard/history",
    element: (
      <PageWrapper>
        <HistoryPage />
      </PageWrapper>
    ),
  },
  {
    path: "/dashboard/profile",
    element: (
      <PageWrapper>
        <ProfilePage />
      </PageWrapper>
    ),
  },
];

export default routes;
export { routes };
