import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import ConsultationScheduler from './components/ConsultationScheduler';
import ContactOptions from './components/ContactOptions';
import ConsultationForm from './components/ConsultationForm';
import OfficeLocations from './components/OfficeLocations';
import FAQSection from './components/FAQSection';
import TrustSignals from './components/TrustSignals';

const ContactConsultation = () => {
  const [activeTab, setActiveTab] = useState('schedule');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: 'schedule', label: 'Schedule Consultation', icon: 'Calendar' },
    { id: 'contact', label: 'Contact Options', icon: 'Phone' },
    { id: 'form', label: 'Consultation Request', icon: 'FileText' },
    { id: 'locations', label: 'Office Locations', icon: 'MapPin' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Contact',
      description: 'Schedule a consultation or submit our short inquiry form',
      icon: 'MessageSquare'
    },
    {
      step: '02',
      title: 'Preparation',
      description: 'We review your details and prepare a tailored agenda',
      icon: 'FileSearch'
    },
    {
      step: '03',
      title: 'Consultation',
      description: '45-minute discussion on goals, risk, and opportunities',
      icon: 'Users'
    },
    {
      step: '04',
      title: 'Proposal',
      description: 'Customized investment roadmap and next steps',
      icon: 'FileCheck'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'schedule':
        return <ConsultationScheduler />;
      case 'contact':
        return <ContactOptions />;
      case 'form':
        return <ConsultationForm />;
      case 'locations':
        return <OfficeLocations />;
      default:
        return <ConsultationScheduler />;
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
              <Icon name="Zap" size={16} />
              <span>Free Initial Consultation</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Start Your Investment
              <span className="text-primary block">Journey Today</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Connect with Apex Capital’s specialists for a personalized consultation.
              No obligations, no fees — just expert guidance aligned with your financial objectives.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => setActiveTab('schedule')}
                className="pulse-subtle"
              >
                Schedule Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                onClick={() => window.open('tel:+15550102000', '_self')}
              >
                Call (555) 010-2000
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-primary mb-1">$2.8B+</div>
                <div className="text-xs text-muted-foreground">Assets Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-primary mb-1">650+</div>
                <div className="text-xs text-muted-foreground">Client Relationships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-primary mb-1">18+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-primary mb-1">97.5%</div>
                <div className="text-xs text-muted-foreground">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Consultation Process */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Our Consultation Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to understanding your needs and crafting personalized investment strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps?.map((step, index) => (
              <div key={step?.step} className="relative">
                <div className="bg-card rounded-xl p-6 brand-shadow-subtle brand-hover-lift brand-transition h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name={step?.icon} size={24} className="text-white" />
                    </div>
                    <div className="text-2xl font-display font-bold text-accent">
                      {step?.step}
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {step?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step?.description}
                  </p>
                </div>
                
                {index < processSteps?.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <Icon name="ArrowRight" size={20} className="text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content Tabs */}
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
                data-tab={tab?.id}
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
      {/* FAQ Section */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection />
        </div>
      </section>
      {/* Trust Signals */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustSignals />
        </div>
      </section>
      {/* Emergency Contact Banner */}
      <section className="py-8 bg-destructive/5 border-y border-destructive/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                <Icon name="AlertTriangle" size={24} className="text-destructive" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Existing Client Emergency Support
                </h3>
                <p className="text-sm text-muted-foreground">
                  24/7 support available for urgent portfolio matters
                </p>
              </div>
            </div>
            <Button
              variant="destructive"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              onClick={() => window.open('tel:+15550109999', '_self')}
            >
              Emergency Line: (555) 050-5321
            </Button>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Ready to Transform Your Investment Strategy?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of successful investors who trust Apex Capital with their financial future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              onClick={() => setActiveTab('schedule')}
              className="bg-white text-primary hover:bg-white/90"
            >
              Schedule Your Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Download"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => {
                const downloadLink = document.createElement('a');
                downloadLink.href = '#';
                downloadLink.download = 'Apex-Investment-Guide.pdf';
                downloadLink?.click();
                alert('Investment Guide download started! Check your Downloads folder.');
              }}
            >
              Download our Investment Guide
            </Button>
          </div>
        </div>
      </section>
      {/* Floating Action Button for Mobile */}
      <div className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} lg:hidden`}>
        <Button
          variant="default"
          size="icon"
          iconName="Phone"
          onClick={() => window.open('tel:+15550102000', '_self')}
          className="w-14 h-14 rounded-full brand-shadow-strong pulse-subtle"
        />
      </div>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/logo-icon-white.svg"
                  alt="Apex Capital"
                  className="h-6 w-auto object-contain"
                />
                <span className="font-display font-semibold text-xl">Apex Capital</span>
              </div>
              <p className="text-white/80 text-sm">
                Your trusted partner in building and preserving wealth through sophisticated investment strategies.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>350 Madison Avenue, Floor 22</p>
                <p>New York, NY 10017</p>
                <p>Phone: (555) 010-2000</p>
                <p>Email: info@apexcapital.com</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Important Links</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>SEC Registration: CRD# 1234567</p>
                <p>Member FINRA/SIPC</p>
                <p>Privacy Policy</p>
                <p>Form ADV</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date()?.getFullYear()} Apex Capital. All rights reserved. Investment advisory services offered through Apex Capital, a registered investment adviser.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactConsultation;
