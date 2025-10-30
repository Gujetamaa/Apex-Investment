import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MarketContext = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('current');

  const marketFactors = [
    {
      id: 1,
      factor: "Federal Reserve Policy",
      impact: "Positive",
      weight: "High",
      description: "Dovish stance supporting equity markets with stable interest rates",
      icon: "Building2",
      trend: "up"
    },
    {
      id: 2,
      factor: "Economic Growth",
      impact: "Positive",
      weight: "High",
      description: "GDP growth exceeding expectations with strong consumer spending",
      icon: "TrendingUp",
      trend: "up"
    },
    {
      id: 3,
      factor: "Inflation Trends",
      impact: "Neutral",
      weight: "Medium",
      description: "Inflation moderating but remaining above target levels",
      icon: "Activity",
      trend: "neutral"
    },
    {
      id: 4,
      factor: "Geopolitical Events",
      impact: "Negative",
      weight: "Medium",
      description: "Regional tensions creating market volatility and uncertainty",
      icon: "Globe",
      trend: "down"
    },
    {
      id: 5,
      factor: "Corporate Earnings",
      impact: "Positive",
      weight: "High",
      description: "Strong earnings growth across major sectors",
      icon: "BarChart3",
      trend: "up"
    },
    {
      id: 6,
      factor: "Technology Innovation",
      impact: "Positive",
      weight: "Medium",
      description: "AI and automation driving productivity gains",
      icon: "Cpu",
      trend: "up"
    }
  ];

  const performanceDrivers = [
    {
      period: "Q3 2025",
      drivers: [
        {
          factor: "Technology Sector Outperformance",
          contribution: "+2.8%",
          description: "Strong AI and cloud computing adoption driving tech stocks higher"
        },
        {
          factor: "Healthcare Innovation",
          contribution: "+1.5%",
          description: "Breakthrough drug approvals and medical device innovations"
        },
        {
          factor: "Defensive Positioning",
          contribution: "+0.9%",
          description: "Lower portfolio beta provided downside protection during volatility"
        },
        {
          factor: "Currency Hedging",
          contribution: "+0.4%",
          description: "Strategic currency hedging protected against dollar strength"
        }
      ]
    },
    {
      period: "Q2 2025",
      drivers: [
        {
          factor: "Quality Stock Selection",
          contribution: "+3.2%",
          description: "Focus on high-quality companies with strong balance sheets"
        },
        {
          factor: "Sector Rotation",
          contribution: "+1.8%",
          description: "Timely rotation from growth to value during market transition"
        },
        {
          factor: "Risk Management",
          contribution: "+1.1%",
          description: "Active risk management during market correction"
        },
        {
          factor: "International Exposure",
          contribution: "-0.5%",
          description: "Emerging market headwinds offset developed market gains"
        }
      ]
    }
  ];

  const getImpactColor = (impact) => {
    switch (impact?.toLowerCase()) {
      case 'positive':
        return 'text-success bg-success/10';
      case 'negative':
        return 'text-error bg-error/10';
      default:
        return 'text-warning bg-warning/10';
    }
  };

  const getWeightColor = (weight) => {
    switch (weight?.toLowerCase()) {
      case 'high':
        return 'text-error bg-error/10';
      case 'medium':
        return 'text-warning bg-warning/10';
      default:
        return 'text-muted-foreground bg-muted/50';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return 'TrendingUp';
      case 'down':
        return 'TrendingDown';
      default:
        return 'Minus';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up':
        return 'text-success';
      case 'down':
        return 'text-error';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Market Environment */}
      <div className="bg-card rounded-lg border border-border p-6 brand-shadow-subtle">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-1">Market Environment</h3>
          <p className="text-sm text-muted-foreground">Key factors influencing portfolio performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {marketFactors?.map((factor) => (
            <div
              key={factor?.id}
              className="p-4 bg-muted/30 rounded-lg border border-border/50 brand-hover-lift brand-transition"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={factor?.icon} size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground">{factor?.factor}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getImpactColor(factor?.impact)}`}>
                        {factor?.impact}
                      </span>
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getWeightColor(factor?.weight)}`}>
                        {factor?.weight}
                      </span>
                    </div>
                  </div>
                </div>
                <Icon 
                  name={getTrendIcon(factor?.trend)} 
                  size={16} 
                  className={getTrendColor(factor?.trend)}
                />
              </div>
              <p className="text-xs text-muted-foreground">{factor?.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Performance Attribution */}
      <div className="bg-card rounded-lg border border-border p-6 brand-shadow-subtle">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">Performance Attribution</h3>
            <p className="text-sm text-muted-foreground">Breakdown of return drivers by quarter</p>
          </div>
          
          <div className="flex items-center space-x-1 bg-muted rounded-lg p-1 mt-4 lg:mt-0">
            <button
              onClick={() => setSelectedPeriod('current')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md brand-transition ${
                selectedPeriod === 'current' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground hover:bg-background'
              }`}
            >
              Q3 2025
            </button>
            <button
              onClick={() => setSelectedPeriod('previous')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md brand-transition ${
                selectedPeriod === 'previous' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground hover:bg-background'
              }`}
            >
              Q2 2025
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {performanceDrivers?.filter(period => 
              (selectedPeriod === 'current' && period?.period === 'Q3 2025') ||
              (selectedPeriod === 'previous' && period?.period === 'Q2 2025')
            )?.map((period) => (
              <div key={period?.period} className="space-y-3">
                {period?.drivers?.map((driver, index) => (
                  <div key={index} className="flex items-start justify-between p-4 bg-muted/20 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-sm font-medium text-foreground">{driver?.factor}</h4>
                        <span className={`text-sm font-semibold ${
                          driver?.contribution?.startsWith('+') ? 'text-success' : 'text-error'
                        }`}>
                          {driver?.contribution}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{driver?.description}</p>
                    </div>
                    <div className="ml-4">
                      <Icon 
                        name={driver?.contribution?.startsWith('+') ? 'ArrowUp' : 'ArrowDown'} 
                        size={16} 
                        className={driver?.contribution?.startsWith('+') ? 'text-success' : 'text-error'}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
      {/* Market Commentary */}
      <div className="bg-card rounded-lg border border-border p-6 brand-shadow-subtle">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-1">Investment Team Commentary</h3>
          <p className="text-sm text-muted-foreground">Quarterly market outlook and portfolio positioning</p>
        </div>

        <div className="space-y-6">
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="MessageSquare" size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Q3 2025 Market Review</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  The third quarter demonstrated the value of our disciplined investment approach. Despite market volatility driven by geopolitical tensions and inflation concerns, our portfolio's defensive positioning and quality stock selection delivered strong risk-adjusted returns.
                </p>
                <p className="text-sm text-muted-foreground">
                  Our technology sector allocation, particularly in AI and cloud infrastructure companies, contributed significantly to outperformance. We maintained our underweight position in cyclical sectors while increasing exposure to healthcare innovation and sustainable energy solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-secondary/5 border border-secondary/20 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Eye" size={18} className="text-secondary" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Looking Ahead: Q4 2025 Outlook</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  We anticipate continued market volatility as central banks navigate the delicate balance between growth support and inflation control. Our strategy remains focused on high-quality companies with strong competitive moats and sustainable business models.
                </p>
                <p className="text-sm text-muted-foreground">
                  Key themes for the coming quarter include the ongoing AI revolution, healthcare innovation, and the transition to sustainable energy. We're positioned to capitalize on these long-term trends while maintaining appropriate risk controls.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="FileText" size={18} className="text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground">Full Quarterly Report</h4>
                <p className="text-xs text-muted-foreground">Detailed analysis and portfolio insights</p>
              </div>
            </div>
            <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
              Download PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketContext;