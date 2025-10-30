import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import PerformanceSummary from './components/PerformanceSummary';
import PerformanceChart from './components/PerformanceChart';
import AssetAllocation from './components/AssetAllocation';
import RiskMetrics from './components/RiskMetrics';
import MarketContext from './components/MarketContext';

const PerformanceDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'BarChart3' },
    { id: 'performance', label: 'Performance', icon: 'TrendingUp' },
    { id: 'allocation', label: 'Allocation', icon: 'PieChart' },
    { id: 'risk', label: 'Risk Analysis', icon: 'Shield' },
    { id: 'context', label: 'Market Context', icon: 'Globe' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <PerformanceSummary />;
      case 'performance':
        return <PerformanceChart />;
      case 'allocation':
        return <AssetAllocation />;
      case 'risk':
        return <RiskMetrics />;
      case 'context':
        return <MarketContext />;
      default:
        return <PerformanceSummary />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Performance Dashboard - Meridian Capital</title>
        <meta name="description" content="Real-time portfolio performance tracking with transparent metrics, risk analysis, and benchmark comparisons. Monitor your investment progress with Meridian Capital's comprehensive dashboard." />
        <meta name="keywords" content="portfolio performance, investment dashboard, risk metrics, asset allocation, benchmark comparison" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="BarChart3" size={24} className="text-primary" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground">
                  Performance Dashboard
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Transparent, real-time insights into your portfolio performance with comprehensive 
                risk analysis and market context to guide your investment journey.
              </p>
              
              {/* Status Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span>Live Data</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>Last Updated: {lastUpdated?.toLocaleTimeString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} />
                  <span>SEC Compliant Reporting</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Button variant="default" iconName="Download" iconPosition="left">
                Export Report
              </Button>
              <Button variant="outline" iconName="Calendar" iconPosition="left">
                Schedule Review
              </Button>
              <Button variant="ghost" iconName="Settings" iconPosition="left">
                Customize View
              </Button>
            </div>
          </div>
        </section>

        {/* Dashboard Navigation */}
        <section className="py-8 bg-surface border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium brand-transition ${
                    activeTab === tab?.id
                      ? 'bg-primary text-primary-foreground brand-shadow-subtle'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {renderTabContent()}
          </div>
        </section>

        {/* Performance Disclaimer */}
        <section className="py-8 bg-muted/30 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-lg border border-border p-6 brand-shadow-subtle">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="AlertTriangle" size={20} className="text-warning" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">Important Disclosures</h3>
                  <div className="text-xs text-muted-foreground space-y-2">
                    <p>
                      <strong>Performance Disclosure:</strong> Past performance is not indicative of future results. 
                      All returns are calculated net of management fees and include reinvested dividends and capital gains. 
                      Performance data is provided for informational purposes only.
                    </p>
                    <p>
                      <strong>Risk Disclosure:</strong> All investments involve risk, including potential loss of principal. 
                      Portfolio values will fluctuate based on market conditions, economic factors, and individual security performance. 
                      Diversification does not guarantee against loss.
                    </p>
                    <p>
                      <strong>Benchmark Disclosure:</strong> Benchmark comparisons are provided for context only. 
                      Benchmarks are unmanaged indices that do not reflect fees, expenses, or trading costs. 
                      Direct investment in an index is not possible.
                    </p>
                    <p>
                      <strong>Data Accuracy:</strong> While we strive for accuracy, market data may be delayed or subject to revision. 
                      Please consult your account statements for official records. Meridian Capital is a registered investment advisor with the SEC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative flex items-center">
                    <img
                      src="/logo-icon-white.svg"
                      alt="Meridian Capital"
                      className="h-8 w-auto object-contain"
                    />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-80"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold">Meridian Capital</h3>
                    <p className="text-sm text-primary-foreground/80">Performance Excellence</p>
                  </div>
                </div>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Delivering transparent, risk-adjusted returns through disciplined investment management 
                  and comprehensive performance reporting.
                </p>
                <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
                  <span>SEC Registered Investment Advisor</span>
                  <span>•</span>
                  <span>SIPC Protected</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/80">
                  <li><a href="/investment-strategies" className="hover:text-primary-foreground brand-transition">Investment Strategies</a></li>
                  <li><a href="/market-insights-hub" className="hover:text-primary-foreground brand-transition">Market Insights</a></li>
                  <li><a href="/about-apex" className="hover:text-primary-foreground brand-transition">About Meridian</a></li>
                  <li><a href="/contact-consultation" className="hover:text-primary-foreground brand-transition">Contact Us</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/80">
                  <li>1-800-MERIDIAN</li>
                  <li>support@apexcapital.com</li>
                  <li>Monday - Friday, 8AM - 6PM EST</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
              <p>&copy; {new Date()?.getFullYear()} Meridian Capital. All rights reserved. | Privacy Policy | Terms of Service</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PerformanceDashboard;