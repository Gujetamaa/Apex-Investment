import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { useConsultationNavigation } from '../../../utils/useConsultationNavigation';

const StrategyCard = ({ strategy }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { navigateToScheduler } = useConsultationNavigation();

  const performanceData = [
    { year: '2019', value: strategy?.performance?.['2019'] || 0 },
    { year: '2020', value: strategy?.performance?.['2020'] || 0 },
    { year: '2021', value: strategy?.performance?.['2021'] || 0 },
    { year: '2022', value: strategy?.performance?.['2022'] || 0 },
    { year: '2023', value: strategy?.performance?.['2023'] || 0 },
    { year: '2024', value: strategy?.performance?.['2024'] || 0 }
  ];

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low': return 'text-success bg-success/10';
      case 'Moderate': return 'text-warning bg-warning/10';
      case 'High': return 'text-error bg-error/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="bg-card rounded-xl border border-border brand-shadow-subtle hover:brand-shadow-elevated brand-transition overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${strategy?.iconBg}`}>
              <Icon name={strategy?.icon} size={24} className={strategy?.iconColor} />
            </div>
            <div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                {strategy?.name}
              </h3>
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(strategy?.risk)}`}>
                  {strategy?.risk} Risk
                </span>
                <span className="text-sm text-muted-foreground">
                  {strategy?.minInvestment} minimum
                </span>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold text-foreground">
              {strategy?.annualReturn}
            </div>
            <div className="text-sm text-muted-foreground">
              5-Year Avg Return
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-4">
          {strategy?.description}
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground">
              {strategy?.volatility}
            </div>
            <div className="text-xs text-muted-foreground">Volatility</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground">
              {strategy?.sharpeRatio}
            </div>
            <div className="text-xs text-muted-foreground">Sharpe Ratio</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground">
              {strategy?.maxDrawdown}
            </div>
            <div className="text-xs text-muted-foreground">Max Drawdown</div>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="h-24 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <XAxis dataKey="year" hide />
              <YAxis hide />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Return']}
                labelFormatter={(label) => `Year ${label}`}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="var(--color-primary)" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Less Details' : 'More Details'}
          </Button>
          
          <Button
            variant="default"
            size="sm"
            iconName="Calendar"
            iconPosition="left"
            className="pulse-subtle"
            onClick={navigateToScheduler}
          >
            Schedule Consultation
          </Button>
        </div>
      </div>
      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-6 bg-surface/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Asset Allocation */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Asset Allocation</h4>
              <div className="space-y-3">
                {strategy?.allocation?.map((asset, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{asset?.type}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${asset?.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-foreground w-8">
                        {asset?.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Client Profile */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Ideal For</h4>
              <ul className="space-y-2">
                {strategy?.idealFor?.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Client Testimonial */}
          {strategy?.testimonial && (
            <div className="mt-6 p-4 bg-card rounded-lg border border-border">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Quote" size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground italic mb-2">
                    "{strategy?.testimonial?.quote}"
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-foreground">
                      {strategy?.testimonial?.client}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      • {strategy?.testimonial?.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StrategyCard;