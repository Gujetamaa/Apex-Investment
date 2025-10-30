import React from 'react';
import Icon from '../../../components/AppIcon';

const MarketDataWidget = ({ marketData }) => {
  const formatValue = (value, type) => {
    if (type === 'percentage') {
      return `${value > 0 ? '+' : ''}${value?.toFixed(2)}%`;
    }
    if (type === 'currency') {
      return `$${value?.toLocaleString()}`;
    }
    return value?.toLocaleString();
  };

  const getChangeColor = (change) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const getChangeIcon = (change) => {
    if (change > 0) return 'TrendingUp';
    if (change < 0) return 'TrendingDown';
    return 'Minus';
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border brand-shadow-subtle">
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="BarChart3" size={20} className="text-primary" />
        <h3 className="font-display text-lg font-semibold text-foreground">
          Market Overview
        </h3>
        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
          Live
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {marketData?.map((item) => (
          <div
            key={item?.symbol}
            className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/20 brand-transition"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-primary font-mono text-xs font-bold">
                  {item?.symbol?.slice(0, 2)}
                </span>
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">{item?.name}</p>
                <p className="text-xs text-muted-foreground">{item?.symbol}</p>
              </div>
            </div>
            
            <div className="text-right">
              <p className="font-mono text-sm font-medium text-foreground">
                {formatValue(item?.price, 'currency')}
              </p>
              <div className="flex items-center space-x-1">
                <Icon 
                  name={getChangeIcon(item?.change)} 
                  size={12} 
                  className={getChangeColor(item?.change)}
                />
                <span className={`text-xs font-medium ${getChangeColor(item?.change)}`}>
                  {formatValue(item?.change, 'percentage')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Last updated: {new Date()?.toLocaleTimeString()}</span>
          <button className="text-primary hover:text-primary-foreground hover:bg-primary px-2 py-1 rounded brand-transition">
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketDataWidget;