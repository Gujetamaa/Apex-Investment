import React from 'react';
import Icon from '../../../components/AppIcon';

const PerformanceMetrics = () => {
  const metrics = [
    {
      id: 1,
      title: "Total Return",
      value: "+38.8%",
      change: "+2.4%",
      changeType: "positive",
      period: "YTD",
      description: "Cumulative portfolio return year-to-date",
      icon: "TrendingUp",
      benchmark: "S&P 500: +25.8%"
    },
    {
      id: 2,
      title: "Maximum Drawdown",
      value: "-4.2%",
      change: "-0.3%",
      changeType: "negative",
      period: "12M",
      description: "Largest peak-to-trough decline",
      icon: "TrendingDown",
      benchmark: "S&P 500: -8.1%"
    },
    {
      id: 3,
      title: "Sharpe Ratio",
      value: "1.42",
      change: "+0.08",
      changeType: "positive",
      period: "12M",
      description: "Risk-adjusted return measurement",
      icon: "Target",
      benchmark: "S&P 500: 1.18"
    },
    {
      id: 4,
      title: "Volatility",
      value: "12.8%",
      change: "-1.2%",
      changeType: "positive",
      period: "12M",
      description: "Standard deviation of returns",
      icon: "Activity",
      benchmark: "S&P 500: 16.4%"
    },
    {
      id: 6,
      title: "Alpha",
      value: "+5.2%",
      change: "+0.8%",
      changeType: "positive",
      period: "12M",
      description: "Excess return vs. benchmark",
      icon: "Zap",
      benchmark: "Outperformance"
    },
    {
      id: 5,
      title: "Beta",
      value: "0.78",
      change: "-0.05",
      changeType: "neutral",
      period: "36M",
      description: "Sensitivity to market movements",
      icon: "BarChart3",
      benchmark: "Market: 1.00"
    }
  ];

  const getChangeColor = (changeType) => {
    switch (changeType) {
      case 'positive':
        return 'text-success';
      case 'negative':
        return 'text-error';
      default:
        return 'text-muted-foreground';
    }
  };

  const getChangeIcon = (changeType) => {
    switch (changeType) {
      case 'positive':
        return 'ArrowUp';
      case 'negative':
        return 'ArrowDown';
      default:
        return 'Minus';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics?.map((metric) => (
        <div
          key={metric?.id}
          className="bg-card rounded-lg border border-border p-6 brand-shadow-subtle brand-hover-lift brand-transition"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={metric?.icon} size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">{metric?.title}</h3>
                <p className="text-xs text-muted-foreground/80">{metric?.period}</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Icon 
                name={getChangeIcon(metric?.changeType)} 
                size={14} 
                className={getChangeColor(metric?.changeType)}
              />
              <span className={`text-xs font-medium ${getChangeColor(metric?.changeType)}`}>
                {metric?.change}
              </span>
            </div>
          </div>

          <div className="mb-3">
            <div className="text-2xl font-bold text-foreground mb-1">
              {metric?.value}
            </div>
            <p className="text-xs text-muted-foreground">
              {metric?.description}
            </p>
          </div>

          <div className="pt-3 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Benchmark</span>
              <span className="text-xs font-medium text-foreground">
                {metric?.benchmark}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PerformanceMetrics;