import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const StrategyFinderTool = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    riskTolerance: '',
    timeline: '',
    goals: ''
  });

  const riskToleranceOptions = [
    { value: 'conservative', label: 'Conservative - Capital Preservation' },
    { value: 'moderate', label: 'Moderate - Balanced Growth' },
    { value: 'aggressive', label: 'Aggressive - Maximum Growth' },
    { value: 'very-aggressive', label: 'Very Aggressive - High Risk/High Reward' }
  ];

  const timelineOptions = [
    { value: 'short', label: 'Short Term (1-3 years)' },
    { value: 'medium', label: 'Medium Term (3-7 years)' },
    { value: 'long', label: 'Long Term (7-15 years)' },
    { value: 'very-long', label: 'Very Long Term (15+ years)' }
  ];

  const goalsOptions = [
    { value: 'retirement', label: 'Retirement Planning' },
    { value: 'wealth-building', label: 'Wealth Building' },
    { value: 'income', label: 'Income Generation' },
    { value: 'tax-efficiency', label: 'Tax Efficiency' },
    { value: 'esg', label: 'ESG/Sustainable Investing' }
  ];

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = { riskTolerance: '', timeline: '', goals: '' };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="bg-card rounded-xl p-6 brand-shadow-subtle border border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-display font-semibold text-foreground mb-2">
            Strategy Finder
          </h3>
          <p className="text-muted-foreground">
            Find investment strategies tailored to your goals and risk profile
          </p>
        </div>
        <div className="hidden sm:flex items-center space-x-2 text-accent">
          <Icon name="Filter" size={20} />
          <span className="text-sm font-medium">Smart Matching</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Select
          label="Risk Tolerance"
          placeholder="Select risk level"
          options={riskToleranceOptions}
          value={filters?.riskTolerance}
          onChange={(value) => handleFilterChange('riskTolerance', value)}
          className="w-full"
        />

        <Select
          label="Investment Timeline"
          placeholder="Select timeline"
          options={timelineOptions}
          value={filters?.timeline}
          onChange={(value) => handleFilterChange('timeline', value)}
          className="w-full"
        />

        <Select
          label="Investment Goals"
          placeholder="Select primary goal"
          options={goalsOptions}
          value={filters?.goals}
          onChange={(value) => handleFilterChange('goals', value)}
          className="w-full"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            iconName="RotateCcw"
            iconPosition="left"
            onClick={clearFilters}
          >
            Clear Filters
          </Button>
          <span className="text-sm text-muted-foreground">
            {Object.values(filters)?.filter(Boolean)?.length} filters applied
          </span>
        </div>
        
        <Button
          variant="default"
          size="sm"
          iconName="Search"
          iconPosition="left"
          className="pulse-subtle"
        >
          Find Strategies
        </Button>
      </div>
    </div>
  );
};

export default StrategyFinderTool;