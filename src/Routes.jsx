import React, { Suspense } from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";

// Lazy load page components for better performance
const MarketInsightsHub = React.lazy(() => import('./pages/market-insights-hub'));
const ContactConsultation = React.lazy(() => import('./pages/contact-consultation'));
const AboutApex = React.lazy(() => import('./pages/about-apex'));
const CommunityForum = React.lazy(() => import('./pages/community-forum'));
const InvestmentStrategies = React.lazy(() => import('./pages/investment-strategies'));
const PerformanceDashboard = React.lazy(() => import('./pages/performance-dashboard'));
const Homepage = React.lazy(() => import('./pages/homepage'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center animate-pulse">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-foreground mb-1">Loading...</h3>
        <p className="text-sm text-muted-foreground">Please wait while we prepare your content</p>
      </div>
    </div>
  </div>
);

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <RouterRoutes>
            {/* Define your route here */}
            <Route path="/" element={<Homepage />} />
            <Route path="/market-insights-hub" element={<MarketInsightsHub />} />
            <Route path="/contact-consultation" element={<ContactConsultation />} />
            <Route path="/about-apex" element={<AboutApex />} />
            <Route path="/community-forum" element={<CommunityForum />} />
            <Route path="/investment-strategies" element={<InvestmentStrategies />} />
            <Route path="/performance-dashboard" element={<PerformanceDashboard />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="*" element={<NotFound />} />
          </RouterRoutes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
