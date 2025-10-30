import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary/90 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="w-full h-full bg-gradient-to-l from-accent/30 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-6">
            Ready to Start Your
            <span className="text-accent"> Investment Journey?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients who trust Apex Capital to navigate their financial future. Schedule a complimentary consultation to discover how we can help you achieve your investment goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Calendar" size={32} />
            </div>
            <h3 className="font-semibold text-lg mb-2">Schedule Consultation</h3>
            <p className="text-white/80 text-sm">
              Book a free 30-minute consultation to discuss your financial goals and investment needs.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="FileText" size={32} />
            </div>
            <h3 className="font-semibold text-lg mb-2">Custom Strategy</h3>
            <p className="text-white/80 text-sm">
              Receive a personalized investment strategy tailored to your risk tolerance and objectives.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="TrendingUp" size={32} />
            </div>
            <h3 className="font-semibold text-lg mb-2">Start Growing</h3>
            <p className="text-white/80 text-sm">
              Begin your journey toward financial success with ongoing support and portfolio management.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact-consultation">
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 pulse-subtle"
            >
              Schedule Free Consultation
            </Button>
          </Link>
          
          <Link to="/investment-strategies">
            <Button
              variant="outline"
              size="lg"
              iconName="BarChart3"
              iconPosition="left"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4"
            >
              Explore Investment Strategies
            </Button>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-white/80">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span>SEC Registered</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Lock" size={16} />
              <span>SIPC Protected</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} />
              <span>Fiduciary Standard</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={16} />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;