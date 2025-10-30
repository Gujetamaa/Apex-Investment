import React from 'react';
import Icon from '../../../components/AppIcon';

const TrendingTopics = ({ topics }) => {
  const getTrendIcon = (trend) => {
    if (trend > 0) return { icon: 'TrendingUp', color: 'text-green-600' };
    if (trend < 0) return { icon: 'TrendingDown', color: 'text-red-600' };
    return { icon: 'Minus', color: 'text-gray-600' };
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border brand-shadow-subtle">
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="Flame" size={20} className="text-accent" />
        <h3 className="font-display text-lg font-semibold text-foreground">
          Trending Topics
        </h3>
      </div>
      <div className="space-y-3">
        {topics?.map((topic, index) => {
          const trendData = getTrendIcon(topic?.trend);
          return (
            <div
              key={topic?.id}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted brand-transition cursor-pointer group"
            >
              <div className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {index + 1}
                </span>
                <div>
                  <p className="font-medium text-foreground text-sm group-hover:text-primary brand-transition">
                    {topic?.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {topic?.mentions} mentions
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Icon 
                  name={trendData?.icon} 
                  size={14} 
                  className={trendData?.color}
                />
                <span className={`text-xs font-medium ${trendData?.color}`}>
                  {topic?.trend > 0 ? '+' : ''}{topic?.trend}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <button className="w-full text-sm text-primary hover:text-primary-foreground hover:bg-primary rounded-lg py-2 brand-transition">
          View All Trending Topics
        </button>
      </div>
    </div>
  );
};

export default TrendingTopics;