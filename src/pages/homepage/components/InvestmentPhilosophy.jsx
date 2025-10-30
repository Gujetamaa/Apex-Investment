import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InvestmentPhilosophy = () => {
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  const philosophyPrinciples = [
    {
      title: 'Data-Driven Decision Making',
      description: 'Our investment choices are grounded in rigorous data analysis and empirical evidence, ensuring that every decision is backed by solid research and statistical validation.',
      icon: 'BarChart3',
      details: [
        'Comprehensive market research and analysis',
        'Quantitative risk modeling and assessment',
        'Historical performance validation',
        'Continuous strategy refinement based on data'
      ],
      color: 'from-primary to-secondary'
    },
    {
      title: 'Long-Term Focus',
      description: 'We prioritize sustainable growth over short-term gains. Our strategies are designed to weather market volatility and capitalize on long-term trends for enduring success.',
      icon: 'TrendingUp',
      details: [
        'Strategic asset allocation with 5-10 year horizons',
        'Focus on quality companies with strong fundamentals',
        'Disciplined rebalancing and tax-loss harvesting',
        'Compound growth optimization strategies'
      ],
      color: 'from-secondary to-trust'
    },
    {
      title: 'Robust Risk Management',
      description: 'Protecting your capital is as important as growing it. We employ sophisticated risk management techniques to optimize returns while minimizing potential downsides.',
      icon: 'Shield',
      details: [
        'Comprehensive risk assessment and monitoring',
        'Diversification across asset classes and geographies',
        'Dynamic hedging strategies when appropriate',
        'Stress testing against various market scenarios'
      ],
      color: 'from-trust to-growth'
    },
    {
      title: 'Transparency & Communication',
      description: 'We believe in maintaining open lines of communication with our clients. You will always be informed about your investments, our strategies, and any changes that may impact your portfolio.',
      icon: 'Eye',
      details: [
        'Real-time portfolio performance reporting',
        'Clear fee structure with no hidden costs',
        'Regular strategy reviews and updates',
        'Direct access to your investment team'
      ],
      color: 'from-growth to-accent'
    }
  ];

  const coreValues = [
    {
      title: 'Fiduciary Responsibility',
      description: 'We are committed to acting in the best interests of our clients at all times',
      icon: 'Scale'
    },
    {
      title: 'Innovation & Adaptability',
      description: 'We constantly evolve our strategies to adapt to changing market conditions',
      icon: 'Lightbulb'
    },
    {
      title: 'Institutional Expertise',
      description: 'Leveraging decades of experience managing assets for institutions and high-net-worth individuals',
      icon: 'Building'
    },
    {
      title: 'Client-Centric Approach',
      description: 'Every decision is made with your unique goals and circumstances in mind',
      icon: 'Heart'
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Compass" size={24} className="text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">Investment Philosophy</span>
          </div>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Our Guiding Principles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four decades of investment experience distilled into core principles that drive every decision we make 
            on behalf of our clients.
          </p>
        </motion.div>

        {/* Philosophy Principles */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Interactive Philosophy Selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {philosophyPrinciples?.map((principle, index) => (
              <motion.button
                key={principle?.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActivePhilosophy(index)}
                className={`w-full text-left p-6 rounded-xl border brand-transition ${
                  activePhilosophy === index
                    ? 'bg-card border-primary brand-shadow-elevated'
                    : 'bg-card/50 border-border hover:border-primary/50 hover:brand-shadow-subtle'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${principle?.color}`}>
                    <Icon name={principle?.icon} size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-2 brand-transition ${
                      activePhilosophy === index ? 'text-primary' : 'text-foreground'
                    }`}>
                      {principle?.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {principle?.description}
                    </p>
                  </div>
                  <Icon 
                    name="ChevronRight" 
                    size={20} 
                    className={`brand-transition ${
                      activePhilosophy === index 
                        ? 'text-primary rotate-90' :'text-muted-foreground'
                    }`} 
                  />
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Active Philosophy Details */}
          <motion.div
            key={activePhilosophy}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-xl p-8 brand-shadow-subtle"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${philosophyPrinciples?.[activePhilosophy]?.color}`}>
                <Icon name={philosophyPrinciples?.[activePhilosophy]?.icon} size={32} className="text-white" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {philosophyPrinciples?.[activePhilosophy]?.title}
                </h3>
                <p className="text-muted-foreground">
                  Core Principle {activePhilosophy + 1} of 4
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {philosophyPrinciples?.[activePhilosophy]?.description}
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground mb-4">How We Apply This Principle:</h4>
              {philosophyPrinciples?.[activePhilosophy]?.details?.map((detail, index) => (
                <motion.div
                  key={detail}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Our Core Values
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These fundamental values shape our culture and guide every interaction with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues?.map((value, index) => (
              <motion.div
                key={value?.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-card border border-border rounded-xl brand-shadow-subtle hover:brand-shadow-elevated brand-transition brand-hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={value?.icon} size={28} className="text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-3">{value?.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value?.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investment Process Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl font-semibold mb-4">
                Our Investment Process
              </h3>
              <p className="text-lg opacity-90 mb-6">
                A systematic, disciplined approach that has been refined over decades of market experience. 
                Every step is designed to optimize outcomes while managing risk.
              </p>
              <div className="space-y-3">
                {[
                  'Comprehensive financial planning and goal setting',
                  'Strategic asset allocation based on risk tolerance',
                  'Rigorous security selection and due diligence',
                  'Ongoing monitoring and portfolio optimization'
                ]?.map((step, index) => (
                  <div key={step} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium">{index + 1}</span>
                    </div>
                    <span className="text-sm opacity-90">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-flex flex-col space-y-4">
                <Link to="/about-apex">
                  <Button
                    variant="secondary"
                    size="lg"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="bg-white text-primary hover:bg-gray-50"
                  >
                    Learn About Our Process
                  </Button>
                </Link>
                <Link to="/investment-strategies">
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Target"
                    iconPosition="left"
                    className="border-white text-white hover:bg-white/10"
                  >
                    View Investment Strategies
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto">
            <Icon name="Quote" size={48} className="text-primary mx-auto mb-6" />
            <blockquote className="font-display text-2xl lg:text-3xl text-foreground leading-relaxed mb-6">
              "Investment success is not about timing the market or chasing the latest trends. 
              It's about having a disciplined process, staying true to proven principles, 
              and maintaining unwavering focus on your long-term goals."
            </blockquote>
            <cite className="text-muted-foreground font-medium">
              — Apex Capital Investment Committee
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentPhilosophy;