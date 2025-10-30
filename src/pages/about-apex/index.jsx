import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import TeamSection from './components/TeamSection';
import CompanyTimeline from './components/CompanyTimeline';
import ComplianceSection from './components/ComplianceSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';

const AboutApex = () => {
  useEffect(() => {
    document.title = 'About Apex - Investment Management Excellence | Apex Capital';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-24">
        <HeroSection />
        <MissionSection />
        <TeamSection />
        <CompanyTimeline />
        <ComplianceSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative flex items-center">
                  <img
                    src="/logo-icon-white.svg"
                    alt="Apex Capital"
                    className="h-8 w-auto object-contain"
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-80"></div>
                </div>
                <div>
                  <span className="font-display font-semibold text-xl">Apex</span>
                  <span className="text-xs text-white/80 block">CAPITAL</span>
                </div>
              </div>
              <p className="text-white/80 mb-6 max-w-md">
                Your trusted partner in navigating complex financial landscapes with transparency, expertise, and unwavering commitment to your success.
              </p>
              <div className="text-sm text-white/60">
                <p>SEC Registered Investment Advisor</p>
                <p>FINRA Member | SIPC Protected</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="/investment-strategies" className="hover:text-white brand-transition">Investment Strategies</a></li>
                <li><a href="/performance-dashboard" className="hover:text-white brand-transition">Performance Dashboard</a></li>
                <li><a href="/market-insights-hub" className="hover:text-white brand-transition">Market Insights</a></li>
                <li><a href="/contact-consultation" className="hover:text-white brand-transition">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>123 Financial District</p>
                <p>New York, NY 10004</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@apexcapital.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date()?.getFullYear()} Apex Capital. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutApex;