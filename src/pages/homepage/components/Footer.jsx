import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: 'Investment Services',
      links: [
        { name: 'Portfolio Management', path: '/investment-strategies' },
        { name: 'Retirement Planning', path: '/investment-strategies' },
        { name: 'Tax Optimization', path: '/investment-strategies' },
        { name: 'Estate Planning', path: '/investment-strategies' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Market Insights', path: '/market-insights-hub' },
        { name: 'Performance Reports', path: '/performance-dashboard' },
        { name: 'Investment Guides', path: '/market-insights-hub' },
        { name: 'Economic Outlook', path: '/market-insights-hub' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Apex', path: '/about-apex' },
        { name: 'Our Team', path: '/about-apex' },
        { name: 'Investment Philosophy', path: '/about-apex' },
        { name: 'Careers', path: '/about-apex' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', path: '/contact-consultation' },
        { name: 'Schedule Consultation', path: '/contact-consultation' },
        { name: 'Client Portal', path: '/contact-consultation' },
        { name: 'Help Center', path: '/contact-consultation' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'YouTube', icon: 'Youtube', url: '#' }
  ];

  const Logo = () => (
    <div className="flex items-center space-x-3">
      <div className="relative flex items-center">
        <img
          src="/logo-horizontal.svg"
          alt="Meridian Capital"
          className="h-8 w-auto object-contain"
        />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-80"></div>
      </div>
      <div className="flex flex-col">
        <span className="font-display font-semibold text-xl text-foreground">
          Meridian
        </span>
        <span className="text-xs text-muted-foreground font-medium tracking-wide">
          CAPITAL
        </span>
      </div>
    </div>
  );

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <Logo />
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Sophisticated investment management that bridges complex strategies with clear, 
                confident decision-making for discerning investors.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} />
                  <span>123 Financial District, New York, NY 10004</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Icon name="Phone" size={16} />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Icon name="Mail" size={16} />
                  <span>info@apexcapital.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks?.map((social) => (
                  <a
                    key={social?.name}
                    href={social?.url}
                    className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary brand-transition"
                    aria-label={social?.name}
                  >
                    <Icon name={social?.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections?.map((section) => (
              <div key={section?.title} className="space-y-4">
                <h3 className="font-semibold text-foreground">{section?.title}</h3>
                <ul className="space-y-3">
                  {section?.links?.map((link) => (
                    <li key={link?.name}>
                      <Link
                        to={link?.path}
                        className="text-muted-foreground hover:text-primary brand-transition text-sm"
                      >
                        {link?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Stay Informed</h3>
              <p className="text-muted-foreground text-sm">
                Get weekly market insights and investment updates delivered to your inbox.
              </p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-secondary brand-transition flex items-center space-x-2">
                <span className="text-sm font-medium">Subscribe</span>
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
              <span>© {currentYear} Meridian Capital. All rights reserved.</span>
              <div className="flex items-center space-x-4">
                <Link to="#" className="hover:text-primary brand-transition">Privacy Policy</Link>
                <Link to="#" className="hover:text-primary brand-transition">Terms of Service</Link>
                <Link to="#" className="hover:text-primary brand-transition">Compliance</Link>
              </div>
            </div>
            
            {/* Regulatory Info */}
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Icon name="Shield" size={14} />
                <span>SEC Registered</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Award" size={14} />
                <span>FINRA Member</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Lock" size={14} />
                <span>SIPC Protected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="py-6 border-t border-border">
          <div className="text-xs text-muted-foreground leading-relaxed">
            <p className="mb-2">
              <strong>Investment Disclaimer:</strong> All investments involve risk, including potential loss of principal. 
              Past performance does not guarantee future results. This material is for informational purposes only and 
              should not be construed as investment advice.
            </p>
            <p>
              Meridian Capital is a registered investment advisor. Registration does not imply a certain level of skill 
              or training. Please consult with a qualified financial advisor before making investment decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;