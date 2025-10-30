import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientSuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const successStories = [
    {
      id: 1,
      clientName: 'Dr. Hannah Carter',
      clientRole: 'Orthopedic Surgeon',
      clientImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      challenge: 'Complex compensation structure with irregular income patterns requiring sophisticated tax planning',
      solution: 'Implemented tax-deferred strategies and diversified portfolio allocation',
      results: [
        { metric: 'Portfolio Growth', value: '127%', period: '5 years' },
        { metric: 'Tax Savings', value: '$180K', period: 'annually' },
        { metric: 'Risk Reduction', value: '35%', period: 'vs. previous portfolio' }
      ],
      testimonial: `Apex transformed my financial chaos into a clear, strategic plan. Their understanding of physician-specific challenges and tax implications has been invaluable. I finally have confidence in my financial future.`,
      timeframe: '2019 - Present',
      category: 'Professional Services'
    },
    {
      id: 2,
      clientName: 'James & Patricia Chen',
      clientRole: 'Tech Executives',
      clientImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
      challenge: 'Pre-retirement planning with significant equity compensation and complex stock options',
      solution: 'Developed systematic diversification strategy and retirement income planning',
      results: [
        { metric: 'Retirement Readiness', value: '95%', period: 'on track' },
        { metric: 'Portfolio Diversification', value: '40%', period: 'reduction in single-stock risk' },
        { metric: 'Income Replacement', value: '85%', period: 'projected retirement income' }
      ],
      testimonial: `The team at Apex helped us navigate the complexity of our stock options and create a retirement plan that gives us peace of mind. Their proactive approach to tax planning saved us significantly.`,
      timeframe: '2020 - Present',
      category: 'Pre-Retirement Planning'
    },
    {
      id: 3,
      clientName: 'Michael Rodriguez',
      clientRole: 'Business Owner',
      clientImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      challenge: 'Business exit planning and wealth diversification after successful company sale',
      solution: 'Structured exit strategy with tax-efficient wealth transfer and legacy planning',
      results: [
        { metric: 'Tax Efficiency', value: '42%', period: 'reduction in tax liability' },
        { metric: 'Wealth Preservation', value: '$2.3M', period: 'additional value retained' },
        { metric: 'Legacy Planning', value: '100%', period: 'estate plan completion' }
      ],
      testimonial: `Apex' expertise in business transitions was exceptional. They coordinated with my legal and tax teams to ensure every detail was optimized. The result exceeded my expectations.`,timeframe: '2021 - 2023',category: 'Business Transition'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories?.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, successStories?.length]);

  const handleStoryChange = (index) => {
    setCurrentStory(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const currentClient = successStories?.[currentStory];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Users" size={24} className="text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">Client Success</span>
          </div>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Real Results, Real Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our personalized investment strategies have helped clients achieve their financial goals 
            and secure their futures.
          </p>
        </motion.div>

        {/* Main Story Display */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Story Content */}
          <motion.div
            key={currentStory}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Client Info */}
            <div className="flex items-center space-x-4">
              <Image
                src={currentClient?.clientImage}
                alt={currentClient?.clientName}
                className="w-16 h-16 rounded-full object-cover brand-shadow-subtle"
              />
              <div>
                <h3 className="font-semibold text-foreground text-lg">{currentClient?.clientName}</h3>
                <p className="text-muted-foreground">{currentClient?.clientRole}</p>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-sm text-muted-foreground">{currentClient?.timeframe}</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {currentClient?.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="AlertCircle" size={18} className="text-warning" />
                  <span>Challenge</span>
                </h4>
                <p className="text-muted-foreground leading-relaxed pl-6">
                  {currentClient?.challenge}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="Lightbulb" size={18} className="text-primary" />
                  <span>Our Solution</span>
                </h4>
                <p className="text-muted-foreground leading-relaxed pl-6">
                  {currentClient?.solution}
                </p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-muted/50 rounded-xl p-6 border-l-4 border-primary">
              <Icon name="Quote" size={24} className="text-primary mb-4" />
              <blockquote className="text-foreground leading-relaxed italic mb-4">
                "{currentClient?.testimonial}"
              </blockquote>
              <cite className="text-muted-foreground text-sm font-medium">
                — {currentClient?.clientName}
              </cite>
            </div>
          </motion.div>

          {/* Results Metrics */}
          <motion.div
            key={`results-${currentStory}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-card border border-border rounded-xl p-6 brand-shadow-subtle">
              <h4 className="font-semibold text-foreground mb-6 flex items-center space-x-2">
                <Icon name="Target" size={20} className="text-success" />
                <span>Key Results</span>
              </h4>

              <div className="space-y-6">
                {currentClient?.results?.map((result, index) => (
                  <motion.div
                    key={result?.metric}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center p-4 bg-success/5 rounded-lg border border-success/20"
                  >
                    <div className="text-3xl font-bold text-success mb-2">
                      {result?.value}
                    </div>
                    <div className="font-medium text-foreground text-sm mb-1">
                      {result?.metric}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {result?.period}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Story Navigation */}
            <div className="bg-card border border-border rounded-xl p-6 brand-shadow-subtle">
              <h4 className="font-semibold text-foreground mb-4">More Success Stories</h4>
              <div className="space-y-3">
                {successStories?.map((story, index) => (
                  <button
                    key={story?.id}
                    onClick={() => handleStoryChange(index)}
                    className={`w-full text-left p-3 rounded-lg brand-transition ${
                      index === currentStory
                        ? 'bg-primary/10 border border-primary/20' :'hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Image
                        src={story?.clientImage}
                        alt={story?.clientName}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className={`font-medium text-sm ${
                          index === currentStory ? 'text-primary' : 'text-foreground'
                        }`}>
                          {story?.clientName}
                        </div>
                        <div className="text-muted-foreground text-xs truncate">
                          {story?.clientRole}
                        </div>
                      </div>
                      {index === currentStory && (
                        <Icon name="ChevronRight" size={16} className="text-primary" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Story Indicators */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          {successStories?.map((_, index) => (
            <button
              key={index}
              onClick={() => handleStoryChange(index)}
              className={`w-3 h-3 rounded-full brand-transition ${
                index === currentStory 
                  ? 'bg-primary' :'bg-border hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>

        {/* Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$2.8B+</div>
              <div className="text-sm opacity-90">Assets Managed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">18.9%</div>
              <div className="text-sm opacity-90">Average Annual Return</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Client Retention Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSuccessStories;