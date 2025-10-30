import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const RiskReturnModeler = () => {
  const [modelInputs, setModelInputs] = useState({
    initialInvestment: '100000',
    monthlyContribution: '2000',
    timeHorizon: '10',
    strategy: 'moderate'
  });

  const [projectionData, setProjectionData] = useState([]);
  const [isCalculated, setIsCalculated] = useState(false);

  const strategyOptions = [
    { value: 'conservative', label: 'Conservative Portfolio (6-8% return)' },
    { value: 'moderate', label: 'Moderate Portfolio (8-10% return)' },
    { value: 'aggressive', label: 'Aggressive Portfolio (10-12% return)' },
    { value: 'growth', label: 'Growth Portfolio (12-15% return)' }
  ];

  const getStrategyReturns = (strategy) => {
    const returns = {
      conservative: { low: 0.06, mid: 0.07, high: 0.08 },
      moderate: { low: 0.08, mid: 0.09, high: 0.10 },
      aggressive: { low: 0.10, mid: 0.11, high: 0.12 },
      growth: { low: 0.12, mid: 0.135, high: 0.15 }
    };
    return returns?.[strategy] || returns?.moderate;
  };

  const calculateProjections = () => {
    const initial = parseFloat(modelInputs?.initialInvestment);
    const monthly = parseFloat(modelInputs?.monthlyContribution);
    const years = parseInt(modelInputs?.timeHorizon);
    const returns = getStrategyReturns(modelInputs?.strategy);

    const data = [];
    
    for (let year = 0; year <= years; year++) {
      const months = year * 12;
      
      // Calculate compound growth for each scenario
      const calculateValue = (annualReturn) => {
        const monthlyReturn = annualReturn / 12;
        let value = initial;
        
        for (let month = 1; month <= months; month++) {
          value = value * (1 + monthlyReturn) + monthly;
        }
        
        return Math.round(value);
      };

      data?.push({
        year,
        conservative: calculateValue(returns?.low),
        expected: calculateValue(returns?.mid),
        optimistic: calculateValue(returns?.high)
      });
    }

    setProjectionData(data);
    setIsCalculated(true);
  };

  const handleInputChange = (field, value) => {
    setModelInputs(prev => ({ ...prev, [field]: value }));
    setIsCalculated(false);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(value);
  };

  const finalProjection = projectionData?.[projectionData?.length - 1];

  return (
    <div className="bg-card rounded-xl p-6 border border-border brand-shadow-subtle">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-display font-semibold text-foreground mb-2">
            Investment Projection Tool
          </h3>
          <p className="text-muted-foreground">
            Model potential outcomes based on different strategies and timeframes
          </p>
        </div>
        <div className="hidden sm:flex items-center space-x-2 text-accent">
          <Icon name="Calculator" size={20} />
          <span className="text-sm font-medium">Smart Modeling</span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Panel */}
        <div className="space-y-4">
          <Input
            label="Initial Investment"
            type="number"
            placeholder="100000"
            value={modelInputs?.initialInvestment}
            onChange={(e) => handleInputChange('initialInvestment', e?.target?.value)}
            description="Starting investment amount"
          />

          <Input
            label="Monthly Contribution"
            type="number"
            placeholder="2000"
            value={modelInputs?.monthlyContribution}
            onChange={(e) => handleInputChange('monthlyContribution', e?.target?.value)}
            description="Regular monthly investment"
          />

          <Input
            label="Time Horizon (Years)"
            type="number"
            placeholder="10"
            value={modelInputs?.timeHorizon}
            onChange={(e) => handleInputChange('timeHorizon', e?.target?.value)}
            description="Investment timeline"
          />

          <Select
            label="Investment Strategy"
            options={strategyOptions}
            value={modelInputs?.strategy}
            onChange={(value) => handleInputChange('strategy', value)}
            description="Choose your risk/return profile"
          />

          <Button
            variant="default"
            fullWidth
            iconName="TrendingUp"
            iconPosition="left"
            onClick={calculateProjections}
            className="mt-6"
          >
            Calculate Projections
          </Button>
        </div>

        {/* Results Panel */}
        <div>
          {isCalculated && finalProjection ? (
            <div className="space-y-6">
              {/* Summary Cards */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-surface/50 rounded-lg p-3 text-center">
                  <div className="text-sm text-muted-foreground mb-1">Conservative</div>
                  <div className="text-lg font-semibold text-foreground">
                    {formatCurrency(finalProjection?.conservative)}
                  </div>
                </div>
                <div className="bg-primary/5 rounded-lg p-3 text-center border border-primary/20">
                  <div className="text-sm text-primary mb-1">Expected</div>
                  <div className="text-lg font-semibold text-primary">
                    {formatCurrency(finalProjection?.expected)}
                  </div>
                </div>
                <div className="bg-success/5 rounded-lg p-3 text-center border border-success/20">
                  <div className="text-sm text-success mb-1">Optimistic</div>
                  <div className="text-lg font-semibold text-success">
                    {formatCurrency(finalProjection?.optimistic)}
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={projectionData}>
                    <XAxis 
                      dataKey="year" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: 'var(--color-muted-foreground)' }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: 'var(--color-muted-foreground)' }}
                      tickFormatter={(value) => `$${(value / 1000)?.toFixed(0)}K`}
                    />
                    <Tooltip 
                      formatter={(value, name) => [formatCurrency(value), name]}
                      labelFormatter={(label) => `Year ${label}`}
                      contentStyle={{
                        backgroundColor: 'var(--color-card)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="conservative" 
                      stroke="var(--color-muted-foreground)" 
                      strokeWidth={2}
                      name="Conservative"
                      strokeDasharray="5 5"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="expected" 
                      stroke="var(--color-primary)" 
                      strokeWidth={3}
                      name="Expected"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="optimistic" 
                      stroke="var(--color-success)" 
                      strokeWidth={2}
                      name="Optimistic"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Key Insights */}
              <div className="bg-surface/30 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Key Insights</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={14} className="text-success" />
                    <span>Total contributions: {formatCurrency(parseFloat(modelInputs?.initialInvestment) + (parseFloat(modelInputs?.monthlyContribution) * 12 * parseInt(modelInputs?.timeHorizon)))}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Target" size={14} className="text-primary" />
                    <span>Expected growth: {formatCurrency(finalProjection?.expected - (parseFloat(modelInputs?.initialInvestment) + (parseFloat(modelInputs?.monthlyContribution) * 12 * parseInt(modelInputs?.timeHorizon))))}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Shield" size={14} className="text-accent" />
                    <span>Projections based on historical performance and market analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                <Icon name="BarChart3" size={24} className="text-muted-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Ready to Model</h4>
              <p className="text-muted-foreground text-sm">
                Enter your investment parameters and click calculate to see projections
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RiskReturnModeler;