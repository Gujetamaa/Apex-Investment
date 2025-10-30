import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionSection = () => {
  const values = [
    {
      icon: "Eye",
      title: "Transparency First",
      description: "We believe in complete openness about our strategies, performance, and fees. No hidden agendas, just honest communication."
    },
    {
      icon: "GraduationCap",
      title: "Education Focused",
      description: "We empower our clients through knowledge, helping them understand their investments and make informed decisions."
    },
    {
      icon: "Target",
      title: "Goal-Oriented",
      description: "Every strategy is tailored to your specific objectives, risk tolerance, and life circumstances."
    },    
    {
      icon: "Handshake",
      title: "Partnership Mindset",
      description: "We build long-term relationships based on trust, mutual respect, and shared commitment to your financial success."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Our Mission & Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Apex Capital, we're more than investment managers – we're your partners in building a secure financial future through principled investing and unwavering commitment to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values?.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 brand-transition">
                <Icon name={value?.icon} size={32} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {value?.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value?.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-surface rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Our Investment Philosophy
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="BarChart3" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Analytical Precision</h4>
                    <p className="text-muted-foreground">
                      We combine rigorous quantitative analysis with deep market research to identify opportunities and manage risk effectively.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Lightbulb" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Visionary Thinking</h4>
                    <p className="text-muted-foreground">
                      We look beyond current market conditions to identify long-term trends and position portfolios for future success.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Shield" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Risk Management</h4>
                    <p className="text-muted-foreground">
                      Every investment decision is evaluated through our comprehensive risk framework to protect and grow your wealth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 brand-shadow-subtle">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-accent" />
                </div>
                <h4 className="font-display text-xl font-semibold text-foreground">
                  Our Commitment
                </h4>
              </div>
              <blockquote className="text-center">
                <p className="text-muted-foreground italic mb-4">
                  "We measure our success not just by returns generated, but by the peace of mind and financial confidence we provide to every client."
                </p>
                <footer className="text-sm font-medium text-primary">
                  — Apex Capital Team
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;