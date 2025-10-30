import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { useConsultationNavigation } from '../../../utils/useConsultationNavigation';

const PopularDiscussions = ({ isExpertMode = false }) => {
  const [sortBy, setSortBy] = useState('popular');
  const { navigateToScheduler } = useConsultationNavigation();

  const discussions = [
    {
      id: 1,
      title: 'ETF Allocation for a Long-Term Growth Portfolio',
      author: 'Hannah Lee',
      authorRole: 'Private Client',
      category: 'Portfolio Strategy & Allocation',
      replies: 28,
      views: 512,
      likes: 22,
      timeAgo: '2 hours ago',
      isExpert: false,
      hasExpertReply: true,
      snippet:
        'Seeking input on an ETF mix for a 25–30 year horizon. Considering a 70/30 equity-to-fixed income allocation — thoughts on adding international exposure?',
      tags: ['ETFs', 'Portfolio Design', 'Long-Term Growth']
    },
    {
      id: 2,
      title: 'Fed Rate Decision: Market Positioning & Sector Rotation',
      author: 'Dr. Porto Garcia',
      authorRole: 'Senior Portfolio Manager',
      category: 'Market Insights & Economic Outlook',
      replies: 52,
      views: 1320,
      likes: 73,
      timeAgo: '3 hours ago',
      isExpert: true,
      hasExpertReply: true,
      snippet:
        'A breakdown of the Fed’s latest rate stance and its impact on duration risk, credit spreads, and equity sector performance.',
      tags: ['Fed Policy', 'Interest Rates', 'Market Outlook']
    },
    {
      id: 3,
      title: 'Tax-Loss Harvesting Opportunities Before Year-End',
      author: 'FinancialPlans_',
      authorRole: 'CFP® Professional',
      category: 'Tax & Estate Optimization',
      replies: 36,
      views: 842,
      likes: 47,
      timeAgo: '6 hours ago',
      isExpert: true,
      hasExpertReply: true,
      snippet:
        'With heightened volatility, it’s an opportune moment to review loss harvesting and carryforward strategies to reduce 2024 tax liabilities.',
      tags: ['Tax Strategy', 'Harvesting', 'Year-End Planning']
    },
    {
      id: 4,
      title: 'First-Time Investor: How Should I Begin?',
      author: 'FirstTimeInvestor2025',
      authorRole: 'Emerging Investor',
      category: 'Investor Education & Newcomers',
      replies: 22,
      views: 358,
      likes: 19,
      timeAgo: '7 hours ago',
      isExpert: false,
      hasExpertReply: true,
      snippet:
        'I recently began saving and have $6,000 ready to invest. Looking for beginner-friendly options and guidance on portfolio starting points.',
      tags: ['Beginner', 'Getting Started', 'Financial Literacy']
    },
    {
      id: 5,
      title: 'Real Estate vs. Public Markets: 2025 Diversification Outlook',
      author: 'WealthBuilder_James',
      authorRole: 'Accredited Investor',
      category: 'Alternative & Private Investments',
      replies: 42,
      views: 940,
      likes: 33,
      timeAgo: '10 hours ago',
      isExpert: false,
      hasExpertReply: true,
      snippet:
        'Comparing expected returns between direct real estate, REITs, and equity markets amid shifting interest-rate conditions.',
      tags: ['Real Estate', 'Diversification', 'Alternative Assets']
    },
    {
      id: 6,
      title: 'Roth IRA vs. Traditional IRA: Which Is Right for You?',
      author: 'RetirementExpert_Lianne',
      authorRole: 'Retirement Planner, CFP®',
      category: 'Retirement & Income Planning',
      replies: 61,
      views: 1680,
      likes: 92,
      timeAgo: '1 day ago',
      isExpert: true,
      hasExpertReply: true,
      snippet:
        'A comprehensive comparison of Roth and Traditional IRAs—eligibility, tax advantages, withdrawal rules, and long-term growth potential.',
      tags: ['Retirement', 'IRA', 'Tax Planning']
    }
  ];


  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'recent', label: 'Most Recent' },
    { value: 'replies', label: 'Most Replies' },
    { value: 'trending', label: 'Trending' }
  ];

  const filteredDiscussions = isExpertMode 
    ? discussions.filter(d => d.isExpert || d.hasExpertReply)
    : discussions;

  const getAuthorBadge = (discussion) => {
    if (discussion.isExpert) {
      return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
          <Icon name="Award" size={12} className="mr-1" />
          Expert
        </span>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-2">
            {isExpertMode ? 'Expert Insights & Discussions' : 'Popular Discussions'}
          </h3>
          <p className="text-muted-foreground">
            {isExpertMode 
              ? 'Insights and discussions from verified financial experts'
              : 'Join the most engaging conversations in our community'
            }
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          <Button
            variant="default"
            size="sm"
            iconName="Plus"
            iconPosition="left"
          >
            New Discussion
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredDiscussions?.map((discussion) => (
          <div 
            key={discussion?.id}
            className="bg-card rounded-xl border border-border p-6 brand-shadow-subtle hover:brand-shadow-elevated brand-transition cursor-pointer group"
          >
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={20} className="text-primary" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground group-hover:text-primary brand-transition mb-1 line-clamp-2">
                      {discussion?.title}
                    </h4>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        {discussion?.author}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        • {discussion?.authorRole}
                      </span>
                      {getAuthorBadge(discussion)}
                      {discussion?.hasExpertReply && !discussion?.isExpert && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                          <Icon name="CheckCircle" size={12} className="mr-1" />
                          Expert Reply
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <span className="text-xs text-muted-foreground flex-shrink-0">
                    {discussion?.timeAgo}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {discussion?.snippet}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-surface text-muted-foreground">
                      {discussion?.category}
                    </span>
                    
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Icon name="MessageSquare" size={14} />
                        <span>{discussion?.replies}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Eye" size={14} />
                        <span>{discussion?.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Heart" size={14} />
                        <span>{discussion?.likes}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {discussion?.tags?.slice(0, 2)?.map((tag, index) => (
                      <span 
                        key={index}
                        className="inline-block px-2 py-1 rounded text-xs bg-muted text-muted-foreground"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {isExpertMode && (
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Calendar" size={24} className="text-accent" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">
              Want Personal Expert Guidance?
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Schedule a one-on-one consultation with our certified financial advisors
            </p>
            <Button
              variant="default"
              size="sm"
              iconName="Calendar"
              iconPosition="left"
              onClick={navigateToScheduler}
            >
              Schedule Expert Consultation
            </Button>
          </div>
        </div>
      )}
      
      <div className="text-center">
        <Button
          variant="outline"
          size="lg"
          iconName="MoreHorizontal"
          iconPosition="right"
        >
          Load More Discussions
        </Button>
      </div>
    </div>
  );
};

export default PopularDiscussions;