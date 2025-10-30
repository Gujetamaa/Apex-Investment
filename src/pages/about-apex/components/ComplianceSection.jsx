import React from 'react';
import Icon from '../../../components/AppIcon';

const ComplianceSection = () => {
  const certifications = [
    {
      title: "SEC Registered",
      description: "Registered Investment Advisor with the Securities and Exchange Commission",
      icon: "Shield",
      details: "Registration No: 801-123456"
    },
    {
      title: "FINRA Member",
      description: "Member of the Financial Industry Regulatory Authority",
      icon: "CheckCircle",
      details: "Member ID: 12345"
    },
    {
      title: "SIPC Protected",
      description: "Client accounts protected by Securities Investor Protection Corporation",
      icon: "Lock",
      details: "Up to $500,000 coverage"
    },
    {
      title: "Annual Audits",
      description: "Independently audited by certified public accounting firms",
      icon: "FileText",
      details: "Latest audit: December 2023"
    }
  ];

  const policies = [
    {
      title: "Fiduciary Responsibility",
      description: "We are legally bound to act in your best interests at all times, putting your financial well-being above our own profits."
    },
    {
      title: "Transparent Fee Structure",
      description: "All fees are clearly disclosed upfront with no hidden charges. Our success is directly tied to your portfolio performance."
    },
    {
      title: "Data Security & Privacy",
      description: "Bank-level encryption and security protocols protect your personal and financial information with the highest industry standards."
    },
    {
      title: "Regulatory Compliance",
      description: "We maintain strict compliance with all federal and state regulations, with regular third-party audits and oversight."
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Trust & Compliance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your trust is our most valuable asset. We maintain the highest standards of regulatory compliance and transparency to protect your interests.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications?.map((cert, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center brand-shadow-subtle hover:brand-shadow-elevated brand-transition">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name={cert?.icon} size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{cert?.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{cert?.description}</p>
              <p className="text-xs text-primary font-medium">{cert?.details}</p>
            </div>
          ))}
        </div>

        {/* Policies */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 brand-shadow-subtle">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-12">
            Our Commitment to You
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {policies?.map((policy, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="CheckCircle" size={16} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{policy?.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{policy?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Information */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Regulatory Transparency
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="FileText" size={20} className="text-primary" />
                  <span className="text-muted-foreground">Form ADV Part 2 available upon request</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="BarChart3" size={20} className="text-primary" />
                  <span className="text-muted-foreground">Annual compliance reports published quarterly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={20} className="text-primary" />
                  <span className="text-muted-foreground">Third-party security audits conducted annually</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={20} className="text-primary" />
                  <span className="text-muted-foreground">Client complaint resolution within 48 hours</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 brand-shadow-subtle">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-accent" />
                </div>
                <h4 className="font-display text-xl font-semibold text-foreground mb-4">
                  Clean Regulatory Record
                </h4>
                <p className="text-muted-foreground mb-6">
                  Zero regulatory violations or client complaints in our 5+ year history. Our commitment to ethical practices is unwavering.
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Clean Record</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Fully Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;