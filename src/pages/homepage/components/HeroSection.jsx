import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useConsultationNavigation } from '../../../utils/useConsultationNavigation';

const HeroSection = () => {
  const { navigateToScheduler } = useConsultationNavigation();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const marketData = [
    { symbol: 'S&P 500', value: '4,567.89', change: '+1.24%', isPositive: true },
    { symbol: 'NASDAQ', value: '14,234.56', change: '+0.87%', isPositive: true },
    { symbol: 'DOW', value: '34,789.12', change: '-0.23%', isPositive: false },
    { symbol: 'VIX', value: '18.45', change: '-2.14%', isPositive: true },
    { symbol: '10Y Treasury', value: '4.32%', change: '+0.05%', isPositive: true },
    { symbol: 'Gold', value: '$2,045.67', change: '+0.56%', isPositive: true }
  ];

  const investmentPathways = [
    {
      title: 'Executive Wealth Management',
      description: 'Tailored strategies for high-net-worth individuals and corporate executives',
      icon: 'Briefcase',
      color: 'from-primary to-secondary',
      features: ['Tax-Optimized Portfolios', 'Executive Compensation Planning', 'Alternative Investments']
    },
    {
      title: 'Retirement Wealth Management',
      description: 'Strategies focused on preserving and growing wealth for a secure retirement',
      icon: 'Shield',
      color: 'from-secondary to-trust',
      features: ['Risk Management', 'Income Generation', 'Estate Planning']
    },
    {
      title: 'Entrepreneurial Wealth Management',
      description: 'Comprehensive solutions for business owners to manage personal and business finances',
      icon: 'TrendingUp',
      color: 'from-trust to-growth',
      features: ['Business Exit Planning', 'Diversification Strategies', 'Legacy Wealth Building']
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-surface to-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      {/* Market Ticker */}
      <div className="relative z-10 bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Clock" size={16} />
              <span>Market Data as of {currentTime?.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                timeZoneName: 'short'
              })}</span>
            </div>
            <div className="hidden lg:flex items-center space-x-6 overflow-x-auto">
              {marketData?.map((item, index) => (
                <motion.div
                  key={item?.symbol}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2 whitespace-nowrap"
                >
                  <span className="text-sm font-medium text-foreground">{item?.symbol}</span>
                  <span className="text-sm font-mono text-muted-foreground">{item?.value}</span>
                  <span className={`text-xs font-medium ${
                    item?.isPositive ? 'text-success' : 'text-error'
                  }`}>
                    {item?.change}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span>Live</span>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full">
                  <Icon name="Award" size={16} className="text-accent" />
                  <span className="text-sm font-medium text-accent">SEC Registered Investment Advisor</span>
                </div>
              </div>

              <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Invest with
                <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                  Purpose & Precision
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Sophisticated investment management that bridges complex strategies with clear, confident decision-making for discerning investors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="pulse-subtle"
                onClick={navigateToScheduler}
              >
                Schedule Consultation
              </Button>
              <Link to="/performance-dashboard">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="BarChart3"
                  iconPosition="left"
                >
                  View Performance
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">$2.8B+</div>
                <div className="text-sm text-muted-foreground">Assets Under Management</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Trusted Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Investment Pathways */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
                Personalized Investment Pathways
              </h2>
              <p className="text-muted-foreground">
                Choose the strategy that aligns with your financial goals and life stage
              </p>
            </div>

            <div className="space-y-4">
              {investmentPathways?.map((pathway, index) => (
                <motion.div
                  key={pathway?.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <Link
                    to="/investment-strategies"
                    className="block p-6 bg-card border border-border rounded-xl brand-shadow-subtle hover:brand-shadow-elevated brand-transition brand-hover-lift"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${pathway?.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon name={pathway?.icon} size={24} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary brand-transition">
                          {pathway?.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          {pathway?.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {pathway?.features?.map((feature) => (
                            <span
                              key={feature}
                              className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Icon 
                        name="ArrowRight" 
                        size={20} 
                        className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 brand-transition" 
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;