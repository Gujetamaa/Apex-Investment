import React from 'react';
import Icon from '../../../components/AppIcon';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'new_post',
      user: 'HannahInvestment',
      action: 'started a new discussion',
      target: 'Best ETF allocation for long-term growth portfolio?',
      category: 'Investment Strategies',
      timeAgo: '2 minutes ago',
      icon: 'MessageSquare',
      iconColor: 'text-primary'
    },
    {
      id: 2,
      type: 'expert_reply',
      user: 'Dr. Porto Garcia',
      action: 'replied to',
      target: 'Market Outlook: Fed Rate Decision Impact Analysis',
      category: 'Market Analysis',
      timeAgo: '15 minutes ago',
      icon: 'Award',
      iconColor: 'text-accent',
      isExpert: true
    },
    {
      id: 3,
      type: 'like',
      user: 'InvestmentNewbie',
      action: 'liked',
      target: 'First-time investor: Where should I start?',
      category: 'Beginner Questions',
      timeAgo: '28 minutes ago',
      icon: 'Heart',
      iconColor: 'text-destructive'
    },
    {
      id: 4,
      type: 'new_member',
      user: 'WealthBuilder2024',
      action: 'joined the community',
      target: 'Welcome to Apex Capital Community!',
      category: 'General',
      timeAgo: '6 hour ago',
      icon: 'UserPlus',
      iconColor: 'text-success'
    },
    {
      id: 5,
      type: 'poll_created',
      user: 'RetirementExpert_Lianne',
      action: 'created a poll',
      target: 'What\'s your preferred retirement account type?',
      category: 'Retirement Planning',
      timeAgo: '1 hour ago',
      icon: 'BarChart3',
      iconColor: 'text-secondary',
      isExpert: true
    },
    {
      id: 6,
      type: 'comment',
      user: 'TaxOptimizer',
      action: 'commented on',
      target: 'Tax-loss harvesting strategies for 2024',
      category: 'Tax Optimization',
      timeAgo: '3 hours ago',
      icon: 'MessageCircle',
      iconColor: 'text-muted-foreground'
    },
    {
      id: 7,
      type: 'milestone',
      user: 'CommunityBot',
      action: 'Community milestone reached:',
      target: '10,000 members!',
      category: 'Announcements',
      timeAgo: '4 hours ago',
      icon: 'Trophy',
      iconColor: 'text-warning',
      isBot: true
    },
    {
      id: 8,
      type: 'expert_ama',
      user: 'Portfolio_Manager_James',
      action: 'started an AMA session',
      target: 'Ask Me Anything: Portfolio Diversification in 2024',
      category: 'Expert Q&A',
      timeAgo: '5 hours ago',
      icon: 'Mic',
      iconColor: 'text-primary',
      isExpert: true
    }
  ];

  const getActivityIcon = (activity) => {
    return (
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        activity.isExpert ? 'bg-primary/10' : 
        activity.isBot ? 'bg-warning/10' : 'bg-muted'
      }`}>
        <Icon name={activity.icon} size={16} className={activity.iconColor} />
      </div>
    );
  };

  const getUserBadge = (activity) => {
    if (activity.isExpert) {
      return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary ml-2">
          <Icon name="Award" size={10} className="mr-1" />
          Expert
        </span>
      );
    }
    if (activity.isBot) {
      return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-warning/10 text-warning ml-2">
          <Icon name="Zap" size={10} className="mr-1" />
          Bot
        </span>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-display font-bold text-foreground mb-2">
          Recent Community Activity
        </h3>
        <p className="text-muted-foreground">
          Stay updated with the latest discussions, posts, and community interactions
        </p>
      </div>

      <div className="bg-card rounded-xl border border-border p-6 brand-shadow-subtle">
        <div className="space-y-4">
          {activities?.map((activity, index) => (
            <div key={activity?.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-surface/50 brand-transition">
              {getActivityIcon(activity)}
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-1 mb-1">
                  <span className="font-medium text-foreground">
                    {activity?.user}
                  </span>
                  {getUserBadge(activity)}
                  <span className="text-sm text-muted-foreground">
                    {activity?.action}
                  </span>
                </div>
                
                <div className="text-sm text-primary hover:text-primary/80 brand-transition cursor-pointer mb-1">
                  "{activity?.target}"
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-surface text-muted-foreground">
                    {activity?.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {activity?.timeAgo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 text-center border border-border">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
            <Icon name="MessageSquare" size={16} className="text-primary" />
          </div>
          <div className="text-lg font-semibold text-foreground">23</div>
          <div className="text-xs text-muted-foreground">New Posts Today</div>
        </div>
        
        <div className="bg-card rounded-lg p-4 text-center border border-border">
          <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
            <Icon name="Users" size={16} className="text-accent" />
          </div>
          <div className="text-lg font-semibold text-foreground">156</div>
          <div className="text-xs text-muted-foreground">Active Members</div>
        </div>
        
        <div className="bg-card rounded-lg p-4 text-center border border-border">
          <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-2">
            <Icon name="TrendingUp" size={16} className="text-success" />
          </div>
          <div className="text-lg font-semibold text-foreground">+12%</div>
          <div className="text-xs text-muted-foreground">Activity Growth</div>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Want to stay updated with community activity?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="inline-flex items-center px-4 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-surface brand-transition">
            <Icon name="Bell" size={16} className="mr-2" />
            Enable Notifications
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-surface brand-transition">
            <Icon name="Mail" size={16} className="mr-2" />
            Weekly Digest
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;