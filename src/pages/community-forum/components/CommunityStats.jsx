import React from 'react';
import Icon from '../../../components/AppIcon';

const CommunityStats = () => {
  const stats = [
    { 
      value: '13.5K+', 
      label: 'Active Members',
      icon: 'Users',
      color: 'text-primary'
    },
    { 
      value: '650+', 
      label: 'Discussions',
      icon: 'MessageSquare',
      color: 'text-secondary'
    },
    { 
      value: '60+', 
      label: 'Expert Advisors',
      icon: 'Award',
      color: 'text-accent'
    },
    { 
      value: '95%', 
      label: 'Satisfaction Rate',
      icon: 'ThumbsUp',
      color: 'text-success'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
      {stats?.map((stat, index) => (
        <div key={index} className="text-center">
          <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-card/50 mb-2 ${stat?.color}`}>
            <Icon name={stat?.icon} size={20} />
          </div>
          <div className={`text-2xl font-display font-bold mb-1 ${stat?.color}`}>
            {stat?.value}
          </div>
          <div className="text-xs text-muted-foreground">
            {stat?.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityStats;