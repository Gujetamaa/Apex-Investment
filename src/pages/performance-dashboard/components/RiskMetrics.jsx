import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import Icon from '../../../components/AppIcon';

const RiskMetrics = () => {
  const riskData = [
    {
      metric: 'Volatility',
      portfolio: 12.8,
      benchmark: 16.4,
      rating: 'Low',
      description: 'Standard deviation of returns'
    },
    {
      metric: 'Beta',
      portfolio: 0.78,
      benchmark: 1.00,
      rating: 'Conservative',
      description: 'Market sensitivity'
    },
    {
      metric: 'Max Drawdown',
      portfolio: 4.2,
      benchmark: 8.1,
      rating: 'Excellent',
      description: 'Largest decline from peak'
    },
    {
      metric: 'VaR (95%)',
      portfolio: 2.1,
      benchmark: 3.2,
      rating: 'Low',
      description: 'Value at Risk (daily)'
    }
  ];

  const correlationData = [
    { asset: 'S&P 500', correlation: 0.78, color: '#1B365D' },
    { asset: 'NASDAQ', correlation: 0.72, color: '#2E5984' },
    { asset: 'Russell 2000', correlation: 0.65, color: '#D4AF37' },
    { asset: 'MSCI EAFE', correlation: 0.58, color: '#37474F' },
    { asset: 'Bonds (AGG)', correlation: -0.12, color: '#38A169' },
    { asset: 'Gold', correlation: -0.08, color: '#E53E3E' },
    { asset: 'REITs', correlation: 0.45, color: '#D69E2E' }
  ];

  const riskProfileData = [
    { subject: 'Liquidity', portfolio: 85, benchmark: 75, fullMark: 100 },
    { subject: 'Diversification', portfolio: 92, benchmark: 80, fullMark: 100 },
    { subject: 'Quality', portfolio: 88, benchmark: 70, fullMark: 100 },
    { subject: 'Stability', portfolio: 90, benchmark: 65, fullMark: 100 },
    { subject: 'Growth Potential', portfolio: 78, benchmark: 85, fullMark: 100 },
    { subject: 'Income Generation', portfolio: 72, benchmark: 60, fullMark: 100 }
  ];

  const getRatingColor = (rating) => {
    switch (rating?.toLowerCase()) {
      case 'excellent':
        return 'text-success bg-success/10';
      case 'low':
        return 'text-success bg-success/10';
      case 'conservative':
        return 'text-primary bg-primary/10';
      case 'moderate':
        return 'text-warning bg-warning/10';
      case 'high':
        return 'text-error bg-error/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 brand-shadow-elevated">
          <p className="text-sm font-medium text-foreground mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <div key={index} className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: entry?.color }}
                />
                <span className="text-sm text-muted-foreground">
                  {entry?.dataKey === 'portfolio' ? 'Portfolio' : 'Benchmark'}
                </span>
              </div>
              <span className="text-sm font-medium text-foreground">
                {typeof entry?.value === 'number' ? entry?.value?.toFixed(2) : entry?.value}
                {entry?.dataKey?.includes('drawdown') || entry?.dataKey?.includes('volatility') ? '%' : ''}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Risk Metrics Overview */}
      <div className="bg-card rounded-lg border border-border p-6 brand-shadow-subtle">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-1">Risk Metrics</h3>
          <p className="text-sm text-muted-foreground">Portfolio risk assessment vs. market benchmarks</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          {riskData?.map((item, index) => (
            <div key={index} className="p-4 bg-muted/30 rounded-lg border border-border/50">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-foreground">{item?.metric}</h4>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRatingColor(item?.rating)}`}>
                  {item?.rating}
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Portfolio</span>
                  <span className="text-sm font-semibold text-foreground">
                    {typeof item?.portfolio === 'number' ? 
                      (item?.metric === 'Beta' ? item?.portfolio?.toFixed(2) : `${item?.portfolio}%`) : 
                      item?.portfolio
                    }
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Benchmark</span>
                  <span className="text-sm text-muted-foreground">
                    {typeof item?.benchmark === 'number' ? 
                      (item?.metric === 'Beta' ? item?.benchmark?.toFixed(2) : `${item?.benchmark}%`) : 
                      item?.benchmark
                    }
                  </span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">{item?.description}</p>
            </div>
          ))}
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={riskData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="metric" 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <YAxis 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="portfolio" fill="var(--color-primary)" name="Portfolio" />
              <Bar dataKey="benchmark" fill="var(--color-secondary)" name="Benchmark" opacity={0.7} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Correlation Analysis */}
        <div className="bg-card rounded-lg border border-border p-6 brand-shadow-subtle">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-1">Correlation Analysis</h3>
            <p className="text-sm text-muted-foreground">Portfolio correlation with major asset classes</p>
          </div>

          <div className="space-y-3">
            {correlationData?.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: item?.color }}
                  />
                  <span className="text-sm font-medium text-foreground">{item?.asset}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-border rounded-full h-2">
                    <div 
                      className="h-2 rounded-full"
                      style={{ 
                        width: `${Math.abs(item?.correlation) * 100}%`,
                        backgroundColor: item?.correlation >= 0 ? 'var(--color-success)' : 'var(--color-error)'
                      }}
                    />
                  </div>
                  <span className={`text-sm font-semibold min-w-[3rem] text-right ${
                    item?.correlation >= 0 ? 'text-success' : 'text-error'
                  }`}>
                    {item?.correlation >= 0 ? '+' : ''}{item?.correlation?.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-muted/20 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Info" size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground">Correlation Guide</span>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>• +1.0: Perfect positive correlation</p>
              <p>• 0.0: No correlation</p>
              <p>• -1.0: Perfect negative correlation</p>
            </div>
          </div>
        </div>

        {/* Risk Profile Radar */}
        <div className="bg-card rounded-lg border border-border p-6 brand-shadow-subtle">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-1">Risk Profile</h3>
            <p className="text-sm text-muted-foreground">Multi-dimensional risk assessment</p>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={riskProfileData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
                <PolarGrid stroke="var(--color-border)" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fontSize: 12, fill: 'var(--color-muted-foreground)' }}
                />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 100]} 
                  tick={{ fontSize: 10, fill: 'var(--color-muted-foreground)' }}
                />
                <Radar
                  name="Portfolio"
                  dataKey="portfolio"
                  stroke="var(--color-primary)"
                  fill="var(--color-primary)"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
                <Radar
                  name="Benchmark"
                  dataKey="benchmark"
                  stroke="var(--color-secondary)"
                  fill="var(--color-secondary)"
                  fillOpacity={0.05}
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
                <Tooltip content={<CustomTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-0.5 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground">Portfolio</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-0.5 bg-secondary rounded-full" style={{ background: 'repeating-linear-gradient(to right, var(--color-secondary) 0, var(--color-secondary) 3px, transparent 3px, transparent 8px)' }}></div>
              <span className="text-sm text-muted-foreground">Benchmark</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskMetrics;