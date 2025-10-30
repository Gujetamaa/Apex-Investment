import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useConsultationNavigation } from '../../../utils/useConsultationNavigation';

const StrategyComparison = ({ strategies }) => {
  const [selectedStrategies, setSelectedStrategies] = useState([]);
  const [comparisonView, setComparisonView] = useState('performance');
  const { navigateToScheduler } = useConsultationNavigation();

  const toggleStrategy = (strategyId) => {
    setSelectedStrategies(prev => {
      if (prev?.includes(strategyId)) {
        return prev?.filter(id => id !== strategyId);
      } else if (prev?.length < 3) {
        return [...prev, strategyId];
      }
      return prev;
    });
  };

  const getComparisonData = () => {
    const selectedStrategyData = strategies?.filter(s => selectedStrategies?.includes(s?.id));
    
    if (comparisonView === 'performance') {
      return selectedStrategyData?.map(strategy => ({
        name: strategy?.name?.split(' ')?.[0],
        '1Year': parseFloat(strategy?.performance?.['2024']) || 0,
        '3Year': ((parseFloat(strategy?.performance?.['2024']) + parseFloat(strategy?.performance?.['2023']) + parseFloat(strategy?.performance?.['2022'])) / 3) || 0,
        '5Year': parseFloat(strategy?.annualReturn?.replace('%', '')) || 0
      }));
    } else {
      return selectedStrategyData?.map(strategy => ({
        name: strategy?.name?.split(' ')?.[0],
        Volatility: parseFloat(strategy?.volatility?.replace('%', '')) || 0,
        'Sharpe Ratio': parseFloat(strategy?.sharpeRatio) || 0,
        'Max Drawdown': Math.abs(parseFloat(strategy?.maxDrawdown?.replace('%', ''))) || 0
      }));
    }
  };

  const comparisonData = getComparisonData();

  return (
    <div className="bg-card rounded-xl p-6 border border-border brand-shadow-subtle">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-display font-semibold text-foreground mb-2">
            Strategy Comparison
          </h3>
          <p className="text-muted-foreground">
            Compare up to 3 strategies side by side
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant={comparisonView === 'performance' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setComparisonView('performance')}
          >
            Performance
          </Button>
          <Button
            variant={comparisonView === 'risk' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setComparisonView('risk')}
          >
            Risk Metrics
          </Button>
        </div>
      </div>
      {/* Strategy Selection */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-foreground">
            Select Strategies to Compare ({selectedStrategies?.length}/3)
          </h4>
          {selectedStrategies?.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              iconName="X"
              iconPosition="left"
              onClick={() => setSelectedStrategies([])}
            >
              Clear Selection
            </Button>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {strategies?.slice(0, 4)?.map((strategy) => (
            <button
              key={strategy?.id}
              onClick={() => toggleStrategy(strategy?.id)}
              disabled={!selectedStrategies?.includes(strategy?.id) && selectedStrategies?.length >= 3}
              className={`p-3 rounded-lg border brand-transition text-left ${
                selectedStrategies?.includes(strategy?.id)
                  ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
              } ${
                !selectedStrategies?.includes(strategy?.id) && selectedStrategies?.length >= 3
                  ? 'opacity-50 cursor-not-allowed' :'cursor-pointer'
              }`}
            >
              <div className="flex items-center space-x-2 mb-1">
                <Icon name={strategy?.icon} size={16} />
                <span className="font-medium text-sm">{strategy?.name}</span>
              </div>
              <div className="text-xs opacity-75">
                {strategy?.annualReturn} avg return
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Comparison Chart */}
      {selectedStrategies?.length > 0 ? (
        <div className="space-y-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: 'var(--color-muted-foreground)' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: 'var(--color-muted-foreground)' }}
                  tickFormatter={(value) => comparisonView === 'performance' ? `${value}%` : value}
                />
                <Tooltip 
                  formatter={(value, name) => [
                    comparisonView === 'performance' ? `${value}%` : value,
                    name
                  ]}
                  labelFormatter={(label) => `Strategy: ${label}`}
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend />
                
                {comparisonView === 'performance' ? (
                  <>
                    <Bar dataKey="1Year" fill="var(--color-primary)" name="1 Year" />
                    <Bar dataKey="3Year" fill="var(--color-secondary)" name="3 Year Avg" />
                    <Bar dataKey="5Year" fill="var(--color-accent)" name="5 Year Avg" />
                  </>
                ) : (
                  <>
                    <Bar dataKey="Volatility" fill="var(--color-warning)" name="Volatility %" />
                    <Bar dataKey="Sharpe Ratio" fill="var(--color-success)" name="Sharpe Ratio" />
                    <Bar dataKey="Max Drawdown" fill="var(--color-error)" name="Max Drawdown %" />
                  </>
                )}
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Comparison Insights */}
          <div className="bg-surface/50 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="Lightbulb" size={16} className="text-accent" />
              </div>
              <div>
                <h5 className="font-medium text-foreground mb-1">Comparison Insights</h5>
                <p className="text-sm text-muted-foreground">
                  {comparisonView === 'performance' 
                    ? "Performance data shows historical returns over different time periods. Past performance does not guarantee future results."
                    : "Risk metrics help evaluate volatility, risk-adjusted returns (Sharpe Ratio), and maximum historical drawdowns."}
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Strategy</th>
                  <th className="text-center py-3 px-4 font-semibold text-foreground">Risk Level</th>
                  <th className="text-center py-3 px-4 font-semibold text-foreground">Min Investment</th>
                  <th className="text-center py-3 px-4 font-semibold text-foreground">5Y Return</th>
                  <th className="text-center py-3 px-4 font-semibold text-foreground">Volatility</th>
                  <th className="text-center py-3 px-4 font-semibold text-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {strategies?.filter(s => selectedStrategies?.includes(s?.id))?.map((strategy) => (
                  <tr key={strategy?.id} className="border-b border-border/50">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${strategy?.iconBg}`}>
                          <Icon name={strategy?.icon} size={16} className={strategy?.iconColor} />
                        </div>
                        <span className="font-medium text-foreground">{strategy?.name}</span>
                      </div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        strategy?.risk === 'Low' ? 'text-success bg-success/10' :
                        strategy?.risk === 'Moderate'? 'text-warning bg-warning/10' : 'text-error bg-error/10'
                      }`}>
                        {strategy?.risk}
                      </span>
                    </td>
                    <td className="text-center py-3 px-4 text-muted-foreground">
                      {strategy?.minInvestment}
                    </td>
                    <td className="text-center py-3 px-4 font-semibold text-foreground">
                      {strategy?.annualReturn}
                    </td>
                    <td className="text-center py-3 px-4 text-muted-foreground">
                      {strategy?.volatility}
                    </td>
                    <td className="text-center py-3 px-4">
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="Calendar"
                        iconPosition="left"
                        onClick={navigateToScheduler}
                      >
                        Consult
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
            <Icon name="BarChart3" size={24} className="text-muted-foreground" />
          </div>
          <h4 className="font-semibold text-foreground mb-2">Select Strategies to Compare</h4>
          <p className="text-muted-foreground text-sm mb-4">
            Choose up to 3 strategies from the options above to see detailed side-by-side comparisons including performance charts, risk metrics, and investment requirements.
          </p>
          <Button
            variant="default"
            size="sm"
            iconName="ArrowUp"
            iconPosition="left"
            onClick={() => {
              const element = document.querySelector('[data-section="strategies-grid"]');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
          >
            View Available Strategies
          </Button>
        </div>
      )}
    </div>
  );
};

export default StrategyComparison;