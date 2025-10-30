import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import StrategyFinderTool from './components/StrategyFinderTool';
import StrategyCard from './components/StrategyCard';
import RiskReturnModeler from './components/RiskReturnModeler';
import StrategyComparison from './components/StrategyComparison';
import { useConsultationNavigation } from '../../utils/useConsultationNavigation';

const InvestmentStrategies = () => {
  const [filteredStrategies, setFilteredStrategies] = useState([]);
  const [activeFilters, setActiveFilters] = useState({});
  const { navigateToScheduler } = useConsultationNavigation();

  const scrollToSection = (sectionName) => {
    const element = document.querySelector(`[data-section="${sectionName}"]`);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Apex-branded strategies (icons use emerald/silver accents)
  const investmentStrategies = [
    {
      id: 1,
      name: "Growth-Focused Portfolio",
      description:
        "Aggressive growth strategy targeting capital appreciation through diversified equity exposure across domestic and international markets.",
      icon: "TrendingUp",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      risk: "High",
      annualReturn: "12.4%",
      volatility: "18.2%",
      sharpeRatio: "0.68",
      maxDrawdown: "-22.1%",
      minInvestment: "$50K",
      performance: { "2019": 28.5, "2020": -8.2, "2021": 31.7, "2022": -18.4, "2023": 24.1, "2024": 15.8 },
      allocation: [
        { type: "US Large Cap Equity", percentage: 35 },
        { type: "International Equity", percentage: 25 },
        { type: "Emerging Markets", percentage: 15 },
        { type: "Small Cap Growth", percentage: 15 },
        { type: "Fixed Income", percentage: 10 }
      ],
      idealFor: [
        "Long-term investors seeking capital growth",
        "Aggressive risk-tolerant individuals",
        "Young professionals building wealth",
        "Those with a 10+ year investment horizon"
      ],
      testimonial: {
        quote:
          "This strategy has significantly boosted my portfolio's growth. The diversified equity exposure has paid off well over the years.",
        client: "Hannah Lee",
        role: "Tech Executive"
      }
    },
    {
      id: 2,
      name: "Income & Preservation Strategy",
      description:
        "Conservative approach focused on capital preservation and steady income generation through a mix of bonds and dividend-paying equities.",
      icon: "Shield",
      iconBg: "bg-secondary/10",
      iconColor: "text-primary",
      risk: "Low",
      annualReturn: "6.8%",
      volatility: "8.4%",
      sharpeRatio: "0.81",
      maxDrawdown: "-5.2%",
      minInvestment: "$25K",
      performance: { "2019": 8.1, "2020": 2.4, "2021": 5.9, "2022": -2.1, "2023": 7.8, "2024": 6.2 },
      allocation: [
        { type: "Government Bonds", percentage: 40 },
        { type: "Corporate Bonds", percentage: 25 },
        { type: "Dividend Stocks", percentage: 20 },
        { type: "REITs", percentage: 10 },
        { type: "Cash Equivalents", percentage: 5 }
      ],
      idealFor: [
        "Pre-retirees seeking capital preservation",
        "Retirees needing reliable income",
        "Risk-averse investors",
        "Those with a 3-5 year investment horizon"
      ],
      testimonial: {
        quote:
          "The steady income and low volatility have been perfect for my retirement needs. I feel secure knowing my capital is preserved.",
        client: "Robert Martinez",
        role: "Retired Engineer"
      }
    },
    {
      id: 3,
      name: "ESG Sustainable Growth",
      description:
        "Sustainable investment strategy incorporating Environmental, Social, and Governance (ESG) criteria to align portfolios with ethical values while pursuing competitive returns.",
      icon: "Leaf",
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
      risk: "Moderate",
      annualReturn: "9.7%",
      volatility: "14.6%",
      sharpeRatio: "0.66",
      maxDrawdown: "-16.8%",
      minInvestment: "$30K",
      performance: { "2019": 22.1, "2020": -5.8, "2021": 18.4, "2022": -12.3, "2023": 16.7, "2024": 11.2 },
      allocation: [
        { type: "ESG Equity Funds", percentage: 45 },
        { type: "Green Bonds", percentage: 20 },
        { type: "Sustainable REITs", percentage: 15 },
        { type: "Clean Energy", percentage: 12 },
        { type: "Impact Investments", percentage: 8 }
      ],
      idealFor: [
        "Environmentally and socially conscious investors",
        "Those prioritizing sustainable practices",
        "Millennials and Gen Z investors",
        "Investors seeking long-term growth with values alignment"
      ],
      testimonial: {
        quote:
          "Investing in ESG has allowed me to support causes I care about while still achieving solid returns. It's a win-win.",
        client: "Emily Johnson",
        role: "Nonprofit Director"
      }
    },
    {
      id: 4,
      name: "Tax-Efficient Strategy",
      description:
        "Optimized portfolio strategy designed to minimize tax liabilities through strategic asset placement and tax-advantaged investments.",
      icon: "Calculator",
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
      risk: "Moderate",
      annualReturn: "10.2%",
      volatility: "12.8%",
      sharpeRatio: "0.80",
      maxDrawdown: "-14.5%",
      minInvestment: "$100K",
      performance: { "2019": 19.3, "2020": -3.7, "2021": 16.8, "2022": -8.9, "2023": 14.2, "2024": 12.7 },
      allocation: [
        { type: "Municipal Bonds", percentage: 30 },
        { type: "Tax-Managed Equity", percentage: 25 },
        { type: "Index Funds", percentage: 20 },
        { type: "Tax-Deferred Annuities", percentage: 15 },
        { type: "Alternative Investments", percentage: 10 }
      ],
      idealFor: [
        "High-income professionals and executives",
        "Financially savvy investors",
        "Those in higher tax brackets",
        "Investors seeking to maximize after-tax returns"
      ],
      testimonial: {
        quote:
          "This tax-efficient strategy has significantly improved my after-tax returns. The team’s expertise in tax planning is evident.",
        client: "Michael Thompson",
        role: "Entrepreneur"
      }
    }
  ];

  useEffect(() => {
    setFilteredStrategies(investmentStrategies);
  }, []);

  const handleFilterChange = (filters) => {
    setActiveFilters(filters);

    if (!filters?.riskTolerance && !filters?.timeline && !filters?.goals) {
      setFilteredStrategies(investmentStrategies);
      return;
    }

    const filtered = investmentStrategies?.filter((strategy) => {
      let matches = true;

      if (filters?.riskTolerance) {
        const riskMap = {
          conservative: ['Low'],
          moderate: ['Low', 'Moderate'],
          aggressive: ['Moderate', 'High'],
          'very-aggressive': ['High']
        };
        matches = matches && riskMap?.[filters?.riskTolerance]?.includes(strategy?.risk);
      }

      if (filters?.goals) {
        const goalMap = {
          retirement: [1, 2, 4],
          'wealth-building': [1, 3],
          income: [2, 4],
          'tax-efficiency': [4],
          esg: [3]
        };
        matches = matches && goalMap?.[filters?.goals]?.includes(strategy?.id);
      }

      return matches;
    });

    setFilteredStrategies(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Target" size={24} className="text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wide">
                Investment Strategies
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Tailored Investment <span className="text-primary block">Approaches</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover sophisticated portfolio strategies designed to match your risk tolerance,
              investment timeline, and financial objectives with transparent performance tracking.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Calculator"
                iconPosition="left"
                className="pulse-subtle"
                onClick={() => scrollToSection('strategy-finder')}
              >
                Use Strategy Finder
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="BarChart3"
                iconPosition="left"
                onClick={() => scrollToSection('strategy-comparison')}
              >
                Compare Strategies
              </Button>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { k: 'Core Strategies', v: '4' },
              { k: 'Avg 5Y Return', v: '9.8%' },
              { k: 'Min Investment', v: '$25K' },
              { k: 'Active Clients', v: '500+' }
            ].map((s) => (
              <div key={s.k} className="bg-card rounded-lg p-6 text-center brand-shadow-subtle border border-border">
                <div className="text-2xl font-bold text-primary mb-2">{s.v}</div>
                <div className="text-sm text-muted-foreground">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Finder */}
      <section className="py-16 bg-surface/30" data-section="strategy-finder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StrategyFinderTool onFilterChange={handleFilterChange} />
        </div>
      </section>

      {/* Strategy Grid */}
      <section className="py-16" data-section="strategies-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-2">Our Investment Strategies</h2>
              <p className="text-muted-foreground">{filteredStrategies?.length} strategies match your criteria</p>
            </div>

            {Object.values(activeFilters)?.some(Boolean) && (
              <Button variant="outline" size="sm" iconName="X" iconPosition="left" onClick={() => handleFilterChange({})}>
                Clear Filters
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStrategies?.map((strategy) => (
              <StrategyCard key={strategy?.id} strategy={strategy} />
            ))}
          </div>

          {filteredStrategies?.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" size={24} className="text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No strategies match your criteria</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or contact us for a custom strategy consultation
              </p>
              <Button variant="default" iconName="MessageCircle" iconPosition="left" onClick={navigateToScheduler}>
                Schedule Consultation
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Projection Tool */}
      <section className="py-16 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Investment Projection Tool</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Model potential outcomes based on different investment amounts, timeframes,
              and strategy selections to make informed decisions.
            </p>
          </div>
          <RiskReturnModeler />
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16" data-section="strategy-comparison">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Compare Strategies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Analyze multiple strategies side by side to understand performance differences,
              risk profiles, and find the best fit for your investment goals.
            </p>
          </div>
          <StrategyComparison strategies={investmentStrategies} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a personalized strategy consultation with our investment experts
            to discuss your goals and find the perfect portfolio approach.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90"
              onClick={navigateToScheduler}
            >
              Schedule Strategy Review
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Call (555) 123-4567
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={16} />
              <span>SEC Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Award" size={16} />
              <span>Fiduciary Standard</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" size={16} />
              <span>500+ Satisfied Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative flex items-center">
                  <img
                    src="/logo-horizontal.svg"
                    alt="Apex Investment Group"
                    className="h-8 w-auto object-contain"
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-80" />
                </div>
                <div>
                  <span className="font-display font-semibold text-xl text-primary">APEX</span>
                  <span className="text-xs text-muted-foreground font-medium tracking-wide block">INVESTMENT GROUP</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Navigate your financial future with confidence through our sophisticated
                investment strategies and transparent performance tracking.
              </p>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">123 Financial District, New York, NY 10004</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/performance-dashboard" className="hover:text-foreground brand-transition">Performance Dashboard</a></li>
                <li><a href="/market-insights-hub" className="hover:text-foreground brand-transition">Market Insights</a></li>
                <li><a href="/about-apex" className="hover:text-foreground brand-transition">About Apex</a></li>
                <li><a href="/contact-consultation" className="hover:text-foreground brand-transition">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={14} />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={14} />
                  <span>info@apexcapital.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Clock" size={14} />
                  <span>Mon–Fri 8AM–6PM EST</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} Apex Investment Group. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground brand-transition">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground brand-transition">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground brand-transition">Disclosures</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InvestmentStrategies;
