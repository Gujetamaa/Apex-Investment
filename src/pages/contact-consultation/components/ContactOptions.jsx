import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactOptions = () => {
  const contactMethods = [
    {
      id: 'phone',
      icon: 'Phone',
      title: 'Call Us Directly',
      description: 'Speak with our investment specialists',
      primary: '+1 (555) 123-4567',
      secondary: 'Mon-Fri, 8:00 AM - 5:00 PM EST',
      action: 'Call Now',
      href: 'tel:+15551234567',
      variant: 'default'
    },
    {
      id: 'email',
      icon: 'Mail',
      title: 'Email Consultation',
      description: 'Detailed inquiries and document sharing',
      primary: 'consultations@apexcapital.com',
      secondary: 'Response within 4 hours',
      action: 'Send Email',
      href: 'mailto:consultations@apexcapital.com',
      variant: 'outline'
    },
    {
      id: 'emergency',
      icon: 'AlertCircle',
      title: 'Urgent Portfolio Matters',
      description: '24/7 support for existing clients',
      primary: '+1 (555) 654-7893',
      secondary: 'Emergency line for critical issues',
      action: 'Emergency Contact',
      href: 'tel:+15559432124',
      variant: 'destructive'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM EST' },
    { day: 'Sunday', hours: 'Emergency Support Only' }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div>
        <h3 className="text-xl font-display font-semibold text-foreground mb-6">
          Get In Touch
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className="bg-card rounded-xl p-6 border border-border brand-hover-lift brand-transition"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={method?.icon} size={24} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground mb-2">
                    {method?.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {method?.description}
                  </p>
                  <div className="space-y-1 mb-4">
                    <p className="font-medium text-foreground text-sm">
                      {method?.primary}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {method?.secondary}
                    </p>
                  </div>
                  <Button
                    variant={method?.variant}
                    size="sm"
                    fullWidth
                    onClick={() => window.open(method?.href, '_self')}
                  >
                    {method?.action}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Office Hours */}
      <div className="bg-surface rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Icon name="Clock" size={20} className="text-primary" />
          <h4 className="font-semibold text-foreground">Office Hours</h4>
        </div>
        <div className="space-y-2">
          {officeHours?.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-1">
              <span className="text-sm text-muted-foreground">{schedule?.day}</span>
              <span className="text-sm font-medium text-foreground">{schedule?.hours}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Response Commitment */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/20">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="Zap" size={20} className="text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Our Response Commitment
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Phone calls answered within 3 rings during business hours</li>
              <li>• Email responses within 4 hours on business days</li>
              <li>• Consultation scheduling confirmed within 2 hours</li>
              <li>• Emergency support available 24/7 for existing clients</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOptions;