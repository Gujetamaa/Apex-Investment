import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const credentials = [
    {
      icon: 'Shield',
      title: 'SEC-Registered Investment Adviser',
      description: 'Investment Adviser Public Disclosure (IAPD)',
      detail: 'CRD# 654321'
    },
    {
      icon: 'Award',
      title: 'FINRA-Registered Broker/Dealer',
      description: 'Financial Industry Regulatory Authority oversight',
      detail: 'Member of SIPC'
    },
    {
      icon: 'Lock',
      title: 'Insured & Bonded',
      description: 'Professional liability + fidelity bond',
      detail: '$12M Aggregate Coverage'
    },
    {
      icon: 'Users',
      title: 'Fiduciary Duty',
      description: 'Client-first standard across advisory services',
      detail: 'Ongoing Obligation'
    }
  ];

  const certifications = [
    { name: 'CFA Institute', logo: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=100&h=60&fit=crop&auto=format' },
    { name: 'CFP Board',   logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=60&fit=crop&auto=format' },
    { name: 'NAPFA',       logo: 'https://images.unsplash.com/photo-1581291519195-ef11498d1cf5?w=100&h=60&fit=crop&auto=format' },
    { name: 'FPA',         logo: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=100&h=60&fit=crop&auto=format' }
  ];

  const securityFeatures = [
    {
      icon: 'Database',
      title: 'Encrypted Data at Rest & In Transit',
      description: 'AES-256 storage and TLS 1.3 transport encryption'
    },
    {
      icon: 'Smartphone',
      title: 'Multi-Factor Authentication',
      description: 'Time-based one-time codes and hardware key support'
    },
    {
      icon: 'Eye',
      title: 'Independent Security Reviews',
      description: 'Third-party assessments performed quarterly'
    },
    {
      icon: 'FileCheck',
      title: 'Real-Time Compliance Monitoring',
      description: 'Policy controls and audit trails across systems'
    }
  ];

  const stats = [
    { value: '$2.8B+', label: 'Assets Under Management', icon: 'TrendingUp' },
    { value: '650+',  label: 'Client Relationships',     icon: 'Users' },
    { value: '18+',   label: 'Years Serving Investors',  icon: 'Calendar' },
    { value: '97.5%', label: 'Client Retention Rate',    icon: 'Heart' }
  ];

  return (
    <div className="space-y-8">
      {/* Regulatory Credentials */}
      <div>
        <h3 className="text-xl font-display font-semibold text-foreground mb-6">
          Regulatory & Professional Standards
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {credentials?.map((credential, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-4 border border-border text-center brand-hover-lift brand-transition"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name={credential?.icon} size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-1">
                {credential?.title}
              </h4>
              <p className="text-xs text-muted-foreground mb-2">
                {credential?.description}
              </p>
              <span className="text-xs font-mono text-accent">
                {credential?.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Professional Certifications */}
      <div>
        <h4 className="font-semibold text-foreground mb-4">
          Professional Associations & Certifications
        </h4>
        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="w-16 h-10 bg-surface rounded overflow-hidden flex items-center justify-center">
                  <img
                    src={cert?.logo}
                    alt={cert?.name}
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>
                <span className="text-xs text-muted-foreground text-center">
                  {cert?.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Security Features */}
      <div>
        <h4 className="font-semibold text-foreground mb-4">
          Security & Privacy Protection
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {securityFeatures?.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-4 border border-border flex items-start space-x-3"
            >
              <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={feature?.icon} size={16} className="text-success" />
              </div>
              <div>
                <h5 className="font-medium text-foreground text-sm mb-1">
                  {feature?.title}
                </h5>
                <p className="text-xs text-muted-foreground">
                  {feature?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Trust Statistics */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/20">
        <h4 className="font-semibold text-foreground mb-4 text-center">
          Trusted by Investors Nationwide
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Icon name={stat?.icon} size={20} className="text-primary" />
              </div>
              <div className="font-display font-bold text-xl text-primary mb-1">
                {stat?.value}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Compliance Statement */}
      <div className="bg-surface rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-primary mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-2">
              Important Disclosure Information
            </h4>
            <div className="text-xs text-muted-foreground space-y-2">
              <p>
                Apex Capital is an investment adviser registered with the U.S. Securities and Exchange Commission.
                Registration does not imply a certain level of skill or training.
              </p>
              <p>
                Investing involves risk, including possible loss of principal. Past results do not guarantee future
                performance. Please review our Form ADV and other disclosures for complete information.
              </p>
              <p>
                This site is for informational purposes only and should not be considered personalized investment,
                tax, or legal advice, nor a solicitation to buy or sell any security.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;