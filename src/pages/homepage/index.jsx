import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import PerformanceDashboard from './components/PerformanceDashboard';
import MarketInsights from './components/MarketInsights';
import ClientSuccessStories from './components/ClientSuccessStories';
import InvestmentPhilosophy from './components/InvestmentPhilosophy';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Apex Capital - Navigate with Confidence | Premium Investment Management</title>
        <meta 
          name="description" 
          content="Sophisticated investment management that bridges complex strategies with clear, confident decision-making. SEC registered with $2.8B+ assets under management." 
        />
        <meta name="keywords" content="investment management, wealth management, financial planning, portfolio management, retirement planning" />
        <meta property="og:title" content="Apex Capital - Navigate with Confidence" />
        <meta property="og:description" content="Premium investment management platform for discerning investors. Transparent performance, expert guidance, fiduciary standard." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage" />
      </Helmet>

      <Header />
      
      <main className="pt-24">
        <HeroSection />
        <PerformanceDashboard />
        <MarketInsights />
        <ClientSuccessStories />
        <InvestmentPhilosophy />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;