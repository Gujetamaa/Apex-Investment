import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ForumCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Portfolio Strategy & Allocation',
      description:
        'Explore diversified portfolio construction, tactical vs. strategic allocation, and disciplined rebalancing approaches.',
      icon: 'TrendingUp',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
      posts: 276,
      members: 1680,
      lastActivity: '1 hour ago',
      trending: true
    },
    {
      id: 2,
      name: 'Market Insights & Economic Outlook',
      description:
        'Share research, macroeconomic trends, sector rotations, and commentary on market drivers shaping performance.',
      icon: 'BarChart3',
      iconBg: 'bg-secondary/10',
      iconColor: 'text-secondary',
      posts: 214,
      members: 1085,
      lastActivity: '45 minutes ago',
      trending: false
    },
    {
      id: 3,
      name: 'Retirement & Income Planning',
      description:
        'Discuss strategies for retirement income, tax-efficient withdrawals, and balancing growth with capital preservation.',
      icon: 'DollarSign',
      iconBg: 'bg-accent/10',
      iconColor: 'text-accent',
      posts: 162,
      members: 790,
      lastActivity: '3 hours ago',
      trending: false
    },
    {
      id: 4,
      name: 'Tax & Estate Optimization',
      description:
        'Insights on tax-advantaged investing, charitable giving, trust structures, and legacy wealth planning.',
      icon: 'Calculator',
      iconBg: 'bg-success/10',
      iconColor: 'text-success',
      posts: 103,
      members: 460,
      lastActivity: '5 hours ago',
      trending: false
    },
    {
      id: 5,
      name: 'Alternative & Private Investments',
      description:
        'Discuss private equity, real estate funds, venture opportunities, hedge strategies, and other non-traditional assets.',
      icon: 'Layers',
      iconBg: 'bg-warning/10',
      iconColor: 'text-warning',
      posts: 88,
      members: 355,
      lastActivity: '2 hours ago',
      trending: true
    },
    {
      id: 6,
      name: 'Investor Education & Newcomers',
      description:
        'A welcoming space for emerging investors to learn fundamentals, ask questions, and build financial confidence.',
      icon: 'Info',
      iconBg: 'bg-info/10',
      iconColor: 'text-info',
      posts: 152,
      members: 910,
      lastActivity: '25 minutes ago',
      trending: false
    }
  ];


  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-display font-bold text-foreground mb-2">
          Discussion Categories
        </h3>
        <p className="text-muted-foreground">
          Choose a category that matches your interests and start engaging with our community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories?.map((category) => (
          <div 
            key={category?.id} 
            className="bg-card rounded-xl border border-border p-6 brand-shadow-subtle hover:brand-shadow-elevated brand-transition cursor-pointer group"
          >
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category?.iconBg} group-hover:scale-110 brand-transition`}>
                <Icon name={category?.icon} size={24} className={category?.iconColor} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-semibold text-foreground group-hover:text-primary brand-transition">
                    {category?.name}
                  </h4>
                  {category?.trending && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-destructive/10 text-destructive">
                      <Icon name="Flame" size={12} className="mr-1" />
                      Trending
                    </span>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {category?.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="MessageSquare" size={14} />
                      <span>{category?.posts} posts</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={14} />
                      <span>{category?.members} members</span>
                    </div>
                  </div>
                  
                  <span className="text-xs text-muted-foreground">
                    {category?.lastActivity}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                iconName="ArrowRight"
                iconPosition="right"
                className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary brand-transition"
              >
                Join Discussion
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center pt-8">
        <Button
          variant="default"
          size="lg"
          iconName="Plus"
          iconPosition="left"
        >
          Suggest New Category
        </Button>
      </div>
    </div>
  );
};

export default ForumCategories;