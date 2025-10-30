import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScheduleConsultation = () => {
    navigate('/contact-consultation');
    // Small delay to ensure navigation completes before scroll
    setTimeout(() => {
      const element = document.querySelector('[data-tab="schedule"]');
      if (element) {
        element.click();
      }
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Investment Strategies', path: '/investment-strategies' },
    { name: 'Performance Dashboard', path: '/performance-dashboard' },
    { name: 'Market Insights', path: '/market-insights-hub' },
    { name: 'About Apex', path: '/about-apex' },
    { name: 'Community Forum', path: '/community-forum' },
  ];

  const moreMenuItems = [
    { name: 'Contact & Consultation', path: '/contact-consultation' },
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const Logo = () => (
    <Link to="/homepage" className="flex items-center space-x-3 group">
      <div className="relative flex items-center">
        {/* New SVG logo without container box */}
        <img
          src="/logo-horizontal.svg"
          alt="Apex Capital"
          className="h-8 w-auto object-contain group-hover:scale-105 brand-transition"
        />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-80"></div>
      </div>
    </Link>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border brand-transition ${
        isScrolled ? 'brand-shadow-subtle' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`text-sm font-medium brand-transition relative group ${
                  isActivePath(item?.path)
                    ? 'text-primary'
                    : 'text-black hover:text-primary'
                }`}
              >
                {item?.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary brand-transition ${
                    isActivePath(item?.path)
                      ? 'opacity-100 scale-x-100' :'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}

            {/* More Menu */}
            <div className="relative group">
              <button className="text-sm font-medium text-muted-foreground hover:text-foreground brand-transition flex items-center space-x-1">
                <span>More</span>
                <Icon name="ChevronDown" size={16} />
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg brand-shadow-elevated opacity-0 invisible group-hover:opacity-100 group-hover:visible brand-transition">
                <div className="py-2">
                  {moreMenuItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`block px-4 py-2 text-sm brand-transition ${
                        isActivePath(item?.path)
                          ? 'text-primary bg-muted' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      {item?.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <Button
                variant="default"
                size="sm"
                iconName="Calendar"
                iconPosition="left"
                className="pulse-subtle"
                onClick={handleScheduleConsultation}
              >
                Schedule Review
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground brand-transition"
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-background border-t border-border brand-transition ${
            isMobileMenuOpen
              ? 'opacity-100 visible max-h-96' :'opacity-0 invisible max-h-0'
          } overflow-hidden`}
        >
          <nav className="px-4 py-4 space-y-3">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium brand-transition ${
                  isActivePath(item?.path)
                    ? 'text-primary'
                    : 'text-black hover:text-primary'
                }`}
              >
                {item?.name}
              </Link>
            ))}
            {moreMenuItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 text-sm brand-transition ${
                  isActivePath(item?.path)
                    ? 'text-primary bg-muted'
                    : 'text-black hover:text-primary hover:bg-muted'
                }`}
              >
                {item?.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Button
                variant="default"
                size="sm"
                iconName="Calendar"
                iconPosition="left"
                fullWidth
                className="pulse-subtle"
                onClick={handleScheduleConsultation}
              >
                Schedule Review
              </Button>
            </div>
          </nav>
        </div>
      </div>
      {/* Trust Signals Bar */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-xs">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-black">
                <Icon name="Shield" size={14} />
                <span>SEC Registered</span>
              </div>
              <div className="flex items-center space-x-2 text-black">
                <Icon name="Users" size={14} />
                <span>Trusted by 600+ Investors</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-black">
              <Icon name="TrendingUp" size={14} />
              <span className="font-mono">$2.8B+ Assets Under Management</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;