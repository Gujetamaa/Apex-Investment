import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedInsight = ({ insight }) => {
  const formatReadTime = (minutes) => {
    return `${minutes} min read`;
  };

  const formatDate = (date) => {
    return new Date(date)?.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="relative bg-card rounded-xl overflow-hidden brand-shadow-elevated group brand-hover-lift">
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground">
          Featured Analysis
        </span>
      </div>
      <div className="relative h-64 overflow-hidden">
        <Image
          src={insight?.image}
          alt={insight?.title}
          className="w-full h-full object-cover group-hover:scale-105 brand-transition"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
          <span className="flex items-center space-x-1">
            <Icon name="Calendar" size={14} />
            <span>{formatDate(insight?.publishedAt)}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Icon name="Clock" size={14} />
            <span>{formatReadTime(insight?.readTime)}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Icon name="User" size={14} />
            <span>{insight?.author?.name}</span>
          </span>
        </div>

        <h2 className="font-display text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary brand-transition">
          {insight?.title}
        </h2>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {insight?.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src={insight?.author?.avatar}
              alt={insight?.author?.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-foreground">{insight?.author?.name}</p>
              <p className="text-xs text-muted-foreground">{insight?.author?.title}</p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            className="text-primary hover:text-primary-foreground hover:bg-primary"
          >
            Read More
          </Button>
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <div className="flex items-center space-x-2">
          <button className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background brand-transition">
            <Icon name="Share2" size={16} className="text-muted-foreground" />
          </button>
          <button className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background brand-transition">
            <Icon name="Bookmark" size={16} className="text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInsight;