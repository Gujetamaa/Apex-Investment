import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const MarketInsights = () => {
  const [currentInsight, setCurrentInsight] = useState(0);

  const marketInsights = [
    {
      id: 1,
      category: 'Market Analysis',
      title: 'Federal Reserve Policy Shift: Implications for Portfolio Positioning',
      excerpt:
        `The Federal Reserve's recent policy adjustments signal a new phase in monetary strategy. Our analysis explores the potential impacts on various asset classes and offers guidance on portfolio positioning in this evolving landscape.`,
      author: 'Hannah Lee, CFA',
      authorRole: 'Chief Investment Officer',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      publishDate: '2025-08-29',
      readTime: '5 min read',
      tags: ['Federal Reserve', 'Monetary Policy', 'Portfolio Strategy'],
      featured: true,
      // Emerald/silver, macro theme
      image:
        'https://unsplash.com/photos/hands-holding-smartphone-showing-stock-market-data-sqok1QIK1mw?q=80&w=1920&auto=format&fit=crop'
    },
    {
      id: 2,
      category: 'Economic Outlook',
      title: 'Q3 2025 Economic Forecast: Key Themes and Market Implications',
      excerpt:
        `As we enter the third quarter of 2025, our economic forecast highlights critical themes shaping the global economy. This report delves into growth projections, inflation trends, and sector-specific outlooks to inform strategic investment decisions.`,
      author: 'Michael Rodriguez, PhD',
      authorRole: 'Senior Economist',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      publishDate: '2025-08-27',
      readTime: '8 min read',
      tags: ['Economic Forecast', 'Market Outlook', 'Investment Strategy'],
      featured: false,
      // Growth lines, green accents
      image:
        'https://images.unsplash.com/photo-1551281044-8c5eff1b5725?q=80&w=1920&auto=format&fit=crop'
    },
    {
      id: 3,
      category: 'Investment Strategy',
      title: 'ESG Investment Trends: Sustainable Portfolios Outperform Traditional Benchmarks',
      excerpt:
        `Sustainable investing continues to gain momentum as ESG-focused portfolios demonstrate resilience and outperformance against traditional benchmarks. This report delves into the latest trends, performance metrics, and strategic approaches for integrating ESG principles into investment decision-making.`,
      author: 'Jennifer Park, CFA',
      authorRole: 'Director of Sustainable Investing',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      publishDate: '2025-08-25',
      readTime: '6 min read',
      tags: ['ESG', 'Sustainable Investing', 'Alpha Generation'],
      featured: false,
      // Nature/green energy with premium tone
      image:
        'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1920&auto=format&fit=crop'
    }
  ];

  const marketHighlights = [
    { title: 'Technology Sector Rotation', description: 'Large-cap tech showing resilience while growth stocks face headwinds', impact: 'Positive', icon: 'Cpu' },
    { title: 'Fixed Income Opportunities', description: 'Rising yields creating attractive entry points in quality bonds', impact: 'Positive', icon: 'TrendingUp' },
    { title: 'International Diversification', description: 'Emerging markets showing signs of stabilization and value', impact: 'Neutral', icon: 'Globe' },
    { title: 'Alternative Investments', description: 'Private equity and real assets providing portfolio diversification', impact: 'Positive', icon: 'Building' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentInsight((prev) => (prev + 1) % marketInsights.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [marketInsights.length]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

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
            <Icon name="Lightbulb" size={24} className="text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">Market Insights</span>
          </div>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Expert Market Commentary
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insightful analysis and market foresight — 
            empowering smarter investment decisions with Apex’s expert-driven guidance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Insight */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-card border border-border rounded-xl overflow-hidden brand-shadow-subtle hover:brand-shadow-elevated brand-transition">
              {/* Cover Image */}
              <div className="relative">
                <Image
                  src={marketInsights[currentInsight]?.image}
                  alt={marketInsights[currentInsight]?.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              </div>

              <div className="p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {marketInsights[currentInsight]?.category}
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-foreground text-sm font-medium rounded-full">
                    Featured
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold text-foreground mb-4 leading-tight">
                  {marketInsights[currentInsight]?.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {marketInsights[currentInsight]?.excerpt}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={marketInsights[currentInsight]?.authorImage}
                      alt={marketInsights[currentInsight]?.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-foreground text-sm">
                        {marketInsights[currentInsight]?.author}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {marketInsights[currentInsight]?.authorRole}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">
                      {formatDate(marketInsights[currentInsight]?.publishDate)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {marketInsights[currentInsight]?.readTime}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {marketInsights[currentInsight]?.tags?.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link to="/market-insights-hub">
                  <Button variant="outline" iconName="ArrowRight" iconPosition="right">
                    Read Full Analysis
                  </Button>
                </Link>
              </div>

              {/* Insight Navigation */}
              <div className="px-8 pb-6">
                <div className="flex items-center space-x-2">
                  {marketInsights.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentInsight(index)}
                      className={`w-2 h-2 rounded-full brand-transition ${
                        index === currentInsight ? 'bg-primary' : 'bg-border hover:bg-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Market Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-xl p-6 brand-shadow-subtle">
              <h3 className="font-semibold text-foreground mb-6 flex items-center space-x-2">
                <Icon name="Activity" size={20} className="text-primary" />
                <span>Market Highlights</span>
              </h3>

              <div className="space-y-4">
                {marketHighlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 brand-transition"
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        highlight.impact === 'Positive'
                          ? 'bg-success/10 text-success'
                          : highlight.impact === 'Negative'
                          ? 'bg-error/10 text-error'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <Icon name={highlight.icon} size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground text-sm mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 text-white">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Mail" size={20} />
                <h3 className="font-semibold">Weekly Market Brief</h3>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Start your week smart: expert analysis delivered every Monday morning.
              </p>
              <Button
                variant="secondary"
                size="sm"
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-white text-primary hover:bg-gray-50 w-full"
              >
                Subscribe Now
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Recent Insights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {marketInsights.slice(1).map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden brand-shadow-subtle hover:brand-shadow-elevated brand-transition brand-hover-lift"
            >
              {/* Card Thumbnail */}
              <Image
                src={insight.image}
                alt={insight.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                    {insight.category}
                  </span>
                </div>

                <h3 className="font-semibold text-foreground mb-3 leading-tight">
                  {insight.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {insight.excerpt.substring(0, 120)}...
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Image
                      src={insight.authorImage}
                      alt={insight.author}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-xs text-muted-foreground">{insight.author}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Icon name="Clock" size={12} />
                    <span>{insight.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/market-insights-hub">
            <Button variant="outline" size="lg" iconName="BookOpen" iconPosition="left">
              Explore All Market Insights
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketInsights;
