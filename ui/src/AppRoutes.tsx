import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const OnboardingPage = lazy(() => import('./pages/OnboardingPage/OnboardingPage.lazy'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage.lazy'))

const AppRoutes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/dashboard" element={<HomePage />} />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRoutes;