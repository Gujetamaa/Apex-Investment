import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const getCategoryIcon = (category) => {
    const icons = {
      'All': 'Grid3X3',
      'Market Analysis': 'TrendingUp',
      'Economic Outlook': 'BarChart3',
      'Investment Strategy': 'Target',
      'Regulatory Changes': 'FileText',
      'Sector Focus': 'Building'
    };
    return icons?.[category] || 'Circle';
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border brand-shadow-subtle">
      <h3 className="font-display text-lg font-semibold text-foreground mb-4">
        Filter by Category
      </h3>
      <div className="space-y-2">
        {categories?.map((category) => (
          <button
            key={category?.name}
            onClick={() => onCategoryChange(category?.name)}
            className={`w-full flex items-center justify-between p-3 rounded-lg text-left brand-transition ${
              activeCategory === category?.name
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted text-foreground'
            }`}
          >
            <div className="flex items-center space-x-3">
              <Icon 
                name={getCategoryIcon(category?.name)} 
                size={16} 
                className={activeCategory === category?.name ? 'text-primary-foreground' : 'text-muted-foreground'}
              />
              <span className="font-medium">{category?.name}</span>
            </div>
            <span className={`text-sm px-2 py-1 rounded-full ${
              activeCategory === category?.name
                ? 'bg-primary-foreground/20 text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}>
              {category?.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;