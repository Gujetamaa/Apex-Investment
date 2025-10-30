import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import FeaturedInsight from './components/FeaturedInsight';
import InsightCard from './components/InsightCard';
import CategoryFilter from './components/CategoryFilter';
import TrendingTopics from './components/TrendingTopics';
import MarketDataWidget from './components/MarketDataWidget';
import NewsletterSignup from './components/NewsletterSignup';
import SearchBar from './components/SearchBar';

const MarketInsightsHub = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredInsights, setFilteredInsights] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const insightsPerPage = 6;

  // Mock data for insights
  const featuredInsight = {
    id: 'featured-1',
    title: 'Federal Reserve Policy Shift: Implications for Portfolio Strategy in 2024',
    excerpt: `The Federal Reserve's recent policy adjustments signal a significant shift in monetary policy direction. Our analysis reveals three key implications for investment portfolios:\n\n1. Interest rate sensitivity across asset classes\n2. Sector rotation opportunities in financials and technology\n3. Currency hedging strategies for international exposure\n\nThis comprehensive analysis examines historical precedents and provides actionable insights for navigating the evolving monetary landscape.`,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop',category: 'Economic Outlook',
    author: {
      name: 'Dr. Hannah Lee',title: 'Chief Investment Strategist',avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
    },
    publishedAt: '2024-08-28T10:00:00Z',
    readTime: 8,
    views: 2847
  };

  const insights = [
    {
      id: '1',
      title: 'Technology Sector Resilience: AI Revolution Drives Growth Despite Market Headwinds',
      excerpt: `Artificial intelligence continues to reshape the technology landscape, creating unprecedented opportunities for investors. Our sector analysis identifies key players positioned for sustained growth despite broader market volatility.`,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop',
      category: 'Sector Focus',
      author: {
        name: 'Michael Rodriguez',
        title: 'Technology Analyst',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
      },
      publishedAt: '2024-08-30T14:30:00Z',
      readTime: 6,
      views: 1923
    },
    {
      id: '2',
      title: 'ESG Investment Trends: Sustainable Portfolios Outperform Traditional Benchmarks',
      excerpt: `Environmental, Social, and Governance (ESG) investing has evolved from a niche strategy to a mainstream approach. Our latest research demonstrates how ESG-focused portfolios are delivering superior risk-adjusted returns.`,
      image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?w=400&h=250&fit=crop',
      category: 'Investment Strategy',
      author: {
        name: 'Emma Thompson',
        title: 'ESG Research Director',
        avatar: 'https://randomuser.me/api/portraits/women/28.jpg'
      },
      publishedAt: '2024-08-29T09:15:00Z',
      readTime: 7,
      views: 1654
    },
    {
      id: '3',
      title: 'Emerging Markets Recovery: Identifying Opportunities in Post-Pandemic Growth',
      excerpt: `Emerging markets are showing signs of robust recovery as global trade normalizes. We analyze key indicators and identify markets positioned for outperformance in the coming quarters.`,
      image: 'https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?w=400&h=250&fit=crop',
      category: 'Market Analysis',
      author: {
        name: 'David Park',
        title: 'Global Markets Strategist',
        avatar: 'https://randomuser.me/api/portraits/men/34.jpg'
      },
      publishedAt: '2024-08-27T16:45:00Z',
      readTime: 9,
      views: 2156
    },
    {
      id: '4',
      title: 'Cryptocurrency Regulation Update: Impact on Digital Asset Investment Strategies',
      excerpt: `Recent regulatory developments in cryptocurrency markets are reshaping the digital asset landscape. Our analysis covers compliance requirements and strategic implications for institutional investors.`,
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop',
      category: 'Regulatory Changes',
      author: {
        name: 'Jennifer Walsh',
        title: 'Regulatory Affairs Specialist',
        avatar: 'https://randomuser.me/api/portraits/women/41.jpg'
      },
      publishedAt: '2024-08-26T11:20:00Z',
      readTime: 5,
      views: 1789
    },
    {
      id: '5',
      title: 'Real Estate Investment Trusts: Navigating Interest Rate Sensitivity',
      excerpt: `REITs face unique challenges in the current interest rate environment. We examine sector fundamentals and identify REITs with strong defensive characteristics and growth potential.`,
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?w=400&h=250&fit=crop',
      category: 'Sector Focus',
      author: {
        name: 'Robert Kim',
        title: 'Real Estate Analyst',
        avatar: 'https://randomuser.me/api/portraits/men/52.jpg'
      },
      publishedAt: '2024-08-25T13:10:00Z',
      readTime: 6,
      views: 1432
    },
    {
      id: '6',
      title: 'Global Supply Chain Resilience: Investment Implications for Manufacturing Sectors',
      excerpt: `Supply chain disruptions continue to impact global manufacturing. Our analysis identifies companies building resilient supply networks and the investment opportunities they present.`,
      image: 'https://images.pixabay.com/photo/2019/12/30/14/56/supply-chain-4729715_1280.jpg?w=400&h=250&fit=crop',
      category: 'Market Analysis',
      author: {
        name: 'Lisa Anderson',
        title: 'Industrial Sector Analyst',
        avatar: 'https://randomuser.me/api/portraits/women/37.jpg'
      },
      publishedAt: '2024-08-24T08:30:00Z',
      readTime: 8,
      views: 1876
    }
  ];

  const categories = [
    { name: 'All', count: insights?.length + 1 },
    { name: 'Market Analysis', count: 2 },
    { name: 'Economic Outlook', count: 1 },
    { name: 'Investment Strategy', count: 1 },
    { name: 'Regulatory Changes', count: 1 },
    { name: 'Sector Focus', count: 2 }
  ];

  const trendingTopics = [
    { id: 1, name: 'Federal Reserve Policy', mentions: 847, trend: 12.5 },
    { id: 2, name: 'AI Investment Opportunities', mentions: 623, trend: 8.3 },
    { id: 3, name: 'ESG Portfolio Performance', mentions: 456, trend: 15.7 },
    { id: 4, name: 'Cryptocurrency Regulation', mentions: 389, trend: -3.2 },
    { id: 5, name: 'Emerging Markets Recovery', mentions: 312, trend: 6.8 }
  ];

  const marketData = [
    { symbol: 'SPY', name: 'S&P 500 ETF', price: 445.67, change: 1.23 },
    { symbol: 'QQQ', name: 'NASDAQ 100 ETF', price: 378.45, change: -0.87 },
    { symbol: 'VTI', name: 'Total Stock Market', price: 234.89, change: 0.56 },
    { symbol: 'BND', name: 'Total Bond Market', price: 78.23, change: -0.12 }
  ];

  useEffect(() => {
    let filtered = insights;

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered?.filter(insight => insight?.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered?.filter(insight =>
        insight?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        insight?.excerpt?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        insight?.author?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        insight?.category?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
    }

    setFilteredInsights(filtered);
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Pagination
  const indexOfLastInsight = currentPage * insightsPerPage;
  const indexOfFirstInsight = indexOfLastInsight - insightsPerPage;
  const currentInsights = filteredInsights?.slice(indexOfFirstInsight, indexOfLastInsight);
  const totalPages = Math.ceil(filteredInsights?.length / insightsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Market Insights Hub - Meridian Capital</title>
        <meta name="description" content="Stay ahead with Meridian Capital's expert market analysis, economic insights, and investment strategy updates. Access timely, actionable research from our investment professionals." />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Icon name="TrendingUp" size={16} className="text-white" />
              <span className="text-white text-sm font-medium">Market Intelligence Hub</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Navigate Markets with
              <span className="block text-accent">Expert Insights</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Access timely market analysis, economic outlooks, and investment strategies from Meridian's research team. 
              Stay informed with insights that drive confident investment decisions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="secondary"
                size="lg"
                iconName="BookOpen"
                iconPosition="left"
                className="bg-white text-primary hover:bg-white/90"
              >
                Explore Latest Insights
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Mail"
                iconPosition="left"
                className="border-white/30 text-white hover:bg-white hover:text-primary"
              >
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Search and Filter Section */}
      <section className="py-8 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
            <div className="flex-1 max-w-2xl">
              <SearchBar onSearch={handleSearch} />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Filter" size={16} />
                <span>Filter by:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories?.slice(0, 4)?.map((category) => (
                  <button
                    key={category?.name}
                    onClick={() => handleCategoryChange(category?.name)}
                    className={`px-3 py-1 rounded-full text-xs font-medium brand-transition ${
                      activeCategory === category?.name
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    {category?.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {/* Featured Insight */}
              {activeCategory === 'All' && !searchQuery && (
                <div className="mb-12">
                  <div className="flex items-center space-x-2 mb-6">
                    <Icon name="Star" size={20} className="text-accent" />
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      Featured Analysis
                    </h2>
                  </div>
                  <FeaturedInsight insight={featuredInsight} />
                </div>
              )}

              {/* Insights Grid */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    {activeCategory === 'All' ? 'Latest Insights' : `${activeCategory} Insights`}
                  </h2>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>{filteredInsights?.length} articles</span>
                    <Icon name="Grid3X3" size={16} />
                  </div>
                </div>

                {currentInsights?.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentInsights?.map((insight) => (
                      <InsightCard key={insight?.id} insight={insight} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      No insights found
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search or filter criteria
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchQuery('');
                        setActiveCategory('All');
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center space-x-2 mt-8">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                      iconName="ChevronLeft"
                      iconPosition="left"
                    >
                      Previous
                    </Button>
                    
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1)?.map((page) => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-8 h-8 rounded text-sm font-medium brand-transition ${
                            currentPage === page
                              ? 'bg-primary text-primary-foreground'
                              : 'hover:bg-muted text-muted-foreground'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={currentPage === totalPages}
                      onClick={() => handlePageChange(currentPage + 1)}
                      iconName="ChevronRight"
                      iconPosition="right"
                    >
                      Next
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Category Filter */}
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />

              {/* Market Data Widget */}
              <MarketDataWidget marketData={marketData} />

              {/* Trending Topics */}
              <TrendingTopics topics={trendingTopics} />

              {/* Newsletter Signup */}
              <NewsletterSignup />

              {/* Recent Insights */}
              <div className="bg-card rounded-xl p-6 border border-border brand-shadow-subtle">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Recent Insights
                </h3>
                <div className="space-y-3">
                  {insights?.slice(0, 3)?.map((insight) => (
                    <InsightCard key={insight?.id} insight={insight} variant="compact" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Apply These Insights?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Schedule a consultation with our investment team to discuss how these market insights 
            can be applied to your portfolio strategy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="secondary"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90 pulse-subtle"
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              className="border-white/30 text-white hover:bg-white hover:text-primary"
            >
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative flex items-center">
                  <img
                    src="/logo-icon-white.svg"
                    alt="Meridian Capital"
                    className="h-8 w-auto object-contain"
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-80"></div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">Meridian Capital</h3>
                  <p className="text-sm text-white/80">Market Intelligence Hub</p>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                Providing institutional-grade market insights and investment analysis to help you navigate complex financial markets with confidence.
              </p>
              <div className="flex items-center space-x-4">
                <Icon name="Shield" size={16} />
                <span className="text-sm">SEC Registered Investment Advisor</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="/investment-strategies" className="block hover:text-accent brand-transition">Investment Strategies</a>
                <a href="/performance-dashboard" className="block hover:text-accent brand-transition">Performance Dashboard</a>
                <a href="/about-apex" className="block hover:text-accent brand-transition">About Meridian</a>
                <a href="/contact-consultation" className="block hover:text-accent brand-transition">Contact Us</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>1234 Financial District</p>
                <p>New York, NY 10004</p>
                <p>(555) 123-4567</p>
                <p>insights@apexcapital.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-white/60">
              © {new Date()?.getFullYear()} Apex Capital. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-white/60 hover:text-white brand-transition">Privacy Policy</a>
              <a href="#" className="text-sm text-white/60 hover:text-white brand-transition">Terms of Service</a>
              <a href="#" className="text-sm text-white/60 hover:text-white brand-transition">Disclosures</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarketInsightsHub;