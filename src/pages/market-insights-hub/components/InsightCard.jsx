import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const InsightCard = ({ insight, variant = 'default' }) => {
  const formatReadTime = (minutes) => {
    return `${minutes} min read`;
  };

  const formatDate = (date) => {
    return new Date(date)?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Market Analysis': 'bg-blue-100 text-blue-800',
      'Economic Outlook': 'bg-green-100 text-green-800',
      'Investment Strategy': 'bg-purple-100 text-purple-800',
      'Regulatory Changes': 'bg-orange-100 text-orange-800',
      'Sector Focus': 'bg-indigo-100 text-indigo-800'
    };
    return colors?.[category] || 'bg-gray-100 text-gray-800';
  };

  if (variant === 'compact') {
    return (
      <div className="bg-card rounded-lg p-4 border border-border hover:border-primary/20 brand-transition group cursor-pointer">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <Image
              src={insight?.image}
              alt={insight?.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(insight?.category)}`}>
                {insight?.category}
              </span>
              <span className="text-xs text-muted-foreground">
                {formatDate(insight?.publishedAt)}
              </span>
            </div>
            <h3 className="font-medium text-foreground text-sm line-clamp-2 group-hover:text-primary brand-transition mb-1">
              {insight?.title}
            </h3>
            <div className="flex items-center space-x-3 text-xs text-muted-foreground">
              <span className="flex items-center space-x-1">
                <Icon name="Clock" size={12} />
                <span>{formatReadTime(insight?.readTime)}</span>
              </span>
              <span>{insight?.author?.name}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/20 brand-shadow-subtle hover:brand-shadow-elevated brand-transition group cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={insight?.image}
          alt={insight?.title}
          className="w-full h-full object-cover group-hover:scale-105 brand-transition"
        />
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(insight?.category)}`}>
            {insight?.category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <button className="p-2 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40 brand-transition">
            <Icon name="Bookmark" size={14} className="text-white" />
          </button>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-3">
          <span className="flex items-center space-x-1">
            <Icon name="Calendar" size={12} />
            <span>{formatDate(insight?.publishedAt)}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Icon name="Clock" size={12} />
            <span>{formatReadTime(insight?.readTime)}</span>
          </span>
        </div>

        <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary brand-transition">
          {insight?.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {insight?.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src={insight?.author?.avatar}
              alt={insight?.author?.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <div>
              <p className="text-xs font-medium text-foreground">{insight?.author?.name}</p>
              <p className="text-xs text-muted-foreground">{insight?.author?.title}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="flex items-center space-x-1 text-xs text-muted-foreground">
              <Icon name="Eye" size={12} />
              <span>{insight?.views}</span>
            </span>
            <button className="p-1 hover:bg-muted rounded brand-transition">
              <Icon name="Share2" size={14} className="text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;