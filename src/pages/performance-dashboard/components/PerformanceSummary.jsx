import React from 'react';
import Icon from '../../../components/AppIcon';

const PerformanceSummary = () => {
  const summaryData = [
    {
      id: 1,
      title: "Portfolio Value",
      value: "$2,847,592",
      change: "+$342,158",
      changePercent: "+13.7%",
      changeType: "positive",
      period: "YTD",
      icon: "DollarSign",
      description: "Total portfolio value as of August 31, 2025"
    },
    {
      id: 2,
      title: "Total Return",
      value: "+38.8%",
      change: "+2.4%",
      changePercent: "vs last month",
      changeType: "positive",
      period: "YTD",
      icon: "TrendingUp",
      description: "Cumulative return including dividends"
    },
    {
      id: 3,
      title: "Benchmark Outperformance",
      value: "+13.0%",
      change: "+1.2%",
      changePercent: "vs S&P 500",
      changeType: "positive",
      period: "YTD",
      icon: "Target",
      description: "Excess return over S&P 500 index"
    },
    {
      id: 4,
      title: "Income Generated",
      value: "$47,285",
      change: "+$3,420",
      changePercent: "+7.8%",
      changeType: "positive",
      period: "YTD",
      icon: "Coins",
      description: "Dividends and interest received"
    }
  ];

  const timeframeReturns = [
    { period: "1 Month", portfolio: "+8.5%", benchmark: "+4.8%", outperformance: "+3.7%" },
    { period: "3 Months", portfolio: "+18.2%", benchmark: "+11.5%", outperformance: "+6.7%" },
    { period: "1 Year", portfolio: "+38.8%", benchmark: "+25.8%", outperformance: "+13.0%" },
    { period: "3 Years", portfolio: "+82.5%", benchmark: "+49.8%", outperformance: "+32.7%" },
    { period: "5 Years", portfolio: "+198.2%", benchmark: "+165.5%", outperformance: "+32.7%" }
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
    <div className="space-y-6">
      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryData?.map((item) => (
          <div
            key={item?.id}
            className="bg-card rounded-lg border border-border p-6 brand-shadow-subtle brand-hover-lift brand-transition"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={item?.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">{item?.title}</h3>
                  <p className="text-xs text-muted-foreground/80">{item?.period}</p>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <div className="text-2xl font-bold text-foreground mb-1">
                {item?.value}
              </div>
              <div className="flex items-center space-x-2">
                <Icon 
                  name={getChangeIcon(item?.changeType)} 
                  size={14} 
                  className={getChangeColor(item?.changeType)}
                />
                <span className={`text-sm font-medium ${getChangeColor(item?.changeType)}`}>
                  {item?.change}
                </span>
                <span className="text-sm text-muted-foreground">
                  {item?.changePercent}
                </span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              {item?.description}
            </p>
          </div>
        ))}
      </div>
      {/* Performance Table */}
      <div className="bg-card rounded-lg border border-border p-6 brand-shadow-subtle">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-1">Performance Summary</h3>
          <p className="text-sm text-muted-foreground">Returns across multiple time periods</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Time Period</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Portfolio Return</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">S&P 500 Benchmark</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Outperformance</th>
              </tr>
            </thead>
            <tbody>
              {timeframeReturns?.map((row, index) => (
                <tr key={index} className="border-b border-border/50 hover:bg-muted/20 brand-transition">
                  <td className="py-4 px-4 text-sm font-medium text-foreground">{row?.period}</td>
                  <td className="py-4 px-4 text-right text-sm font-semibold text-success">{row?.portfolio}</td>
                  <td className="py-4 px-4 text-right text-sm text-muted-foreground">{row?.benchmark}</td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end space-x-1">
                      <Icon name="ArrowUp" size={14} className="text-success" />
                      <span className="text-sm font-semibold text-success">{row?.outperformance}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-muted/20 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={16} className="text-primary mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-foreground mb-1">Performance Disclaimer</h4>
              <p className="text-xs text-muted-foreground">
                Past performance is not indicative of future results. Returns are calculated net of fees and include reinvested dividends. 
                Benchmark comparisons are provided for informational purposes only. Individual account performance may vary based on 
                investment timing, contributions, and withdrawals.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg border border-border p-6 brand-shadow-subtle">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
              <Icon name="Calendar" size={20} className="text-success" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Best Month</h3>
              <p className="text-lg font-bold text-foreground">March 2025</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="ArrowUp" size={14} className="text-success" />
            <span className="text-sm font-semibold text-success">+12.4%</span>
            <span className="text-sm text-muted-foreground">return</span>
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border p-6 brand-shadow-subtle">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Award" size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Win Rate</h3>
              <p className="text-lg font-bold text-foreground">73.2%</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Positive months:</span>
            <span className="text-sm font-semibold text-foreground">30 of 41</span>
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border p-6 brand-shadow-subtle">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name="Shield" size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Downside Capture</h3>
              <p className="text-lg font-bold text-foreground">68.5%</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="TrendingDown" size={14} className="text-success" />
            <span className="text-sm text-muted-foreground">vs benchmark declines</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSummary;