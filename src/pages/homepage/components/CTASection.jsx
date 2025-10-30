import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { useConsultationNavigation } from '../../../utils/useConsultationNavigation';

const CTASection = () => {
  const { navigateToScheduler } = useConsultationNavigation();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const consultationBenefits = [
    'Comprehensive portfolio analysis',
    'Personalized investment strategy',
    'Tax optimization opportunities',
    'Risk assessment and management',
    'Retirement planning guidance',
    'Estate planning coordination'
  ];

  const handleNewsletterSubmit = (e) => {
    e?.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary via-secondary to-trust rounded-3xl p-8 lg:p-16 text-white mb-16 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Ready to Navigate Your Financial Future?
                </h2>
                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                  Schedule a complimentary consultation with our investment experts. 
                  Discover how our personalized approach can help you achieve your financial goals.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    variant="secondary"
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    className="bg-white text-primary hover:bg-gray-50 pulse-subtle"
                    onClick={navigateToScheduler}
                  >
                    Schedule Free Consultation
                  </Button>
                  <Link to="/performance-dashboard">
                    <Button
                      variant="outline"
                      size="lg"
                      iconName="BarChart3"
                      iconPosition="left"
                      className="border-white text-white hover:bg-white/10"
                    >
                      View Performance
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center space-x-6 text-sm opacity-90">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} />
                    <span>30-minute session</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={16} />
                    <span>No obligation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={16} />
                    <span>Expert guidance</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <h3 className="font-semibold text-xl mb-6">What You'll Receive:</h3>
              <div className="space-y-4">
                {consultationBenefits?.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={14} className="text-white" />
                    </div>
                    <span className="text-sm opacity-90">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Secondary CTAs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-6 brand-shadow-subtle"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Market Insights</h3>
                <p className="text-muted-foreground text-sm">Weekly newsletter</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Get expert market analysis and investment insights delivered to your inbox every Monday.
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e?.target?.value)}
                  required
                />
                <Button
                  type="submit"
                  variant="default"
                  size="sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                  fullWidth
                >
                  Subscribe
                </Button>
              </form>
            ) : (
              <div className="text-center py-4">
                <Icon name="CheckCircle" size={32} className="text-success mx-auto mb-2" />
                <p className="text-success text-sm font-medium">Successfully subscribed!</p>
              </div>
            )}
          </motion.div>

          {/* Resource Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-xl p-6 brand-shadow-subtle hover:brand-shadow-elevated brand-transition brand-hover-lift"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-warning rounded-lg flex items-center justify-center">
                <Icon name="FileText" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Investment Guide</h3>
                <p className="text-muted-foreground text-sm">Free download</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              "The Complete Guide to Building Wealth: Investment Strategies for Every Life Stage"
            </p>
            <Button
              variant="outline"
              size="sm"
              iconName="Download"
              iconPosition="left"
              fullWidth
            >
              Download Guide
            </Button>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-6 brand-shadow-subtle"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-trust to-growth rounded-lg flex items-center justify-center">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Direct Contact</h3>
                <p className="text-muted-foreground text-sm">Speak with an advisor</p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="Phone" size={16} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="Mail" size={16} />
                <span>info@apexcapital.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="Clock" size={16} />
                <span>Mon-Fri: 8AM-6PM EST</span>
              </div>
            </div>
            <Link to="/contact-consultation" className="block mt-4">
              <Button
                variant="outline"
                size="sm"
                iconName="MessageCircle"
                iconPosition="left"
                fullWidth
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Shield" size={24} className="text-primary" />
              <span className="text-sm font-medium text-muted-foreground">SEC Registered</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Award" size={24} className="text-primary" />
              <span className="text-sm font-medium text-muted-foreground">FINRA Member</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Lock" size={24} className="text-primary" />
              <span className="text-sm font-medium text-muted-foreground">SIPC Protected</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Users" size={24} className="text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Fiduciary Standard</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;