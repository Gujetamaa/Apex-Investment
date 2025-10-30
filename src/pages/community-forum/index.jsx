import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import ForumCategories from './components/ForumCategories';
import PopularDiscussions from './components/PopularDiscussions';
import RecentActivity from './components/RecentActivity';
import CommunityStats from './components/CommunityStats';
import { useConsultationNavigation } from '../../utils/useConsultationNavigation';

const CommunityForum = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [isScrolled, setIsScrolled] = useState(false);
  const { navigateToScheduler } = useConsultationNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: 'discussions', label: 'Popular Discussions', icon: 'MessageSquare' },
    { id: 'categories', label: 'Categories', icon: 'Grid' },
    { id: 'activity', label: 'Recent Activity', icon: 'Clock' },
    { id: 'experts', label: 'Expert Insights', icon: 'Users' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'discussions':
        return <PopularDiscussions />;
      case 'categories':
        return <ForumCategories />;
      case 'activity':
        return <RecentActivity />;
      case 'experts':
        return <PopularDiscussions isExpertMode={true} />;
      default:
        return <PopularDiscussions />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Users" size={16} />
              <span>Investment Community</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Connect, Learn &
              <span className="text-primary block">Grow Together</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join our vibrant community of investors, advisors, and financial experts. 
              Share insights, ask questions, and learn from experienced professionals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                variant="default"
                size="lg"
                iconName="Plus"
                iconPosition="left"
                className="pulse-subtle"
              >
                Start a Discussion
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                onClick={navigateToScheduler}
              >
                Join Expert Q&A
              </Button>
            </div>

            {/* Community Stats */}
            <CommunityStats />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs?.map((tab) => (
              <Button
                key={tab?.id}
                variant={activeTab === tab?.id ? 'default' : 'outline'}
                size="sm"
                iconName={tab?.icon}
                iconPosition="left"
                onClick={() => setActiveTab(tab?.id)}
                className="brand-transition"
              >
                <span className="hidden sm:inline">{tab?.label}</span>
                <span className="sm:hidden">{tab?.label?.split(' ')?.[0]}</span>
              </Button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-6xl mx-auto">
            {renderTabContent()}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Community Guidelines
            </h2>
            <p className="text-lg text-muted-foreground">
              Help us maintain a respectful and productive environment for all members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 text-center brand-shadow-subtle">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-success" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Be Respectful</h3>
              <p className="text-sm text-muted-foreground">
                Treat all community members with courtesy and respect, regardless of experience level
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center brand-shadow-subtle">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="BookOpen" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Share Knowledge</h3>
              <p className="text-sm text-muted-foreground">
                Contribute valuable insights and help others learn from your experiences
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center brand-shadow-subtle">
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="AlertTriangle" size={24} className="text-warning" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Stay Professional</h3>
              <p className="text-sm text-muted-foreground">
                Keep discussions investment-focused and avoid promotional or off-topic content
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Ready to Join the Conversation?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Connect with fellow investors and get personalized guidance from our expert advisors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              iconName="UserPlus"
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90"
            >
              Create Account
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={navigateToScheduler}
            >
              Schedule Expert Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Floating Action Button for Mobile */}
      <div className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} lg:hidden`}>
        <Button
          variant="default"
          size="icon"
          iconName="Plus"
          className="w-14 h-14 rounded-full brand-shadow-strong pulse-subtle"
        />
      </div>
      
      {/* Footer */}
      <footer className="bg-surface border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative flex items-center">
                  <img
                    src="/logo-horizontal.svg"
                    alt="Apex Capital"
                    className="h-8 w-auto object-contain"
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-80"></div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">Apex Capital</h3>
                  <p className="text-sm text-muted-foreground">Investment Community Forum</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Connect with fellow investors and financial experts in our vibrant community. 
                Share insights, ask questions, and grow together.
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} />
                  <span>SEC Registered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} />
                  <span>12.5K+ Members</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/investment-strategies" className="hover:text-foreground brand-transition">Investment Strategies</a></li>
                <li><a href="/performance-dashboard" className="hover:text-foreground brand-transition">Performance Dashboard</a></li>
                <li><a href="/market-insights-hub" className="hover:text-foreground brand-transition">Market Insights</a></li>
                <li><a href="/about-apex" className="hover:text-foreground brand-transition">About Apex</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/contact-consultation" className="hover:text-foreground brand-transition">Contact & Consultation</a></li>
                <li><a href="#" className="hover:text-foreground brand-transition">Community Guidelines</a></li>
                <li><a href="#" className="hover:text-foreground brand-transition">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground brand-transition">Report Issue</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Apex Capital. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground brand-transition">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground brand-transition">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground brand-transition">
                Community Rules
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CommunityForum;