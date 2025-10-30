import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import Icon from '../../../components/AppIcon';


const PerformanceChart = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1Y');
  const [chartType, setChartType] = useState('line');

  const timeframes = [
    { label: '1M', value: '1M' },
    { label: '3M', value: '3M' },
    { label: '1Y', value: '1Y' },
    { label: '3Y', value: '3Y' },
    { label: '5Y', value: '5Y' }
  ];

  const performanceData = {
    '1M': [
      { date: '2025-08-01', meridian: 100, sp500: 100, russell2000: 100 },
      { date: '2025-08-05', meridian: 101.2, sp500: 100.8, russell2000: 99.5 },
      { date: '2025-08-10', meridian: 102.8, sp500: 101.5, russell2000: 100.2 },
      { date: '2025-08-15', meridian: 104.1, sp500: 102.2, russell2000: 101.8 },
      { date: '2025-08-20', meridian: 105.7, sp500: 103.1, russell2000: 102.5 },
      { date: '2025-08-25', meridian: 107.2, sp500: 104.0, russell2000: 103.2 },
      { date: '2025-08-31', meridian: 108.5, sp500: 104.8, russell2000: 104.1 }
    ],
    '3M': [
      { date: '2025-06-01', meridian: 100, sp500: 100, russell2000: 100 },
      { date: '2025-06-15', meridian: 103.2, sp500: 101.8, russell2000: 99.8 },
      { date: '2025-07-01', meridian: 106.8, sp500: 103.5, russell2000: 101.2 },
      { date: '2025-07-15', meridian: 109.1, sp500: 105.2, russell2000: 103.8 },
      { date: '2025-08-01', meridian: 112.5, sp500: 107.1, russell2000: 105.5 },
      { date: '2025-08-15', meridian: 115.8, sp500: 109.8, russell2000: 107.2 },
      { date: '2025-08-31', meridian: 118.2, sp500: 111.5, russell2000: 108.9 }
    ],
    '1Y': [
      { date: '2024-09-01', meridian: 100, sp500: 100, russell2000: 100 },
      { date: '2024-11-01', meridian: 108.5, sp500: 105.2, russell2000: 103.8 },
      { date: '2025-01-01', meridian: 115.2, sp500: 109.8, russell2000: 107.5 },
      { date: '2025-03-01', meridian: 122.8, sp500: 114.5, russell2000: 111.2 },
      { date: '2025-05-01', meridian: 128.5, sp500: 118.2, russell2000: 114.8 },
      { date: '2025-07-01', meridian: 134.2, sp500: 122.1, russell2000: 118.5 },
      { date: '2025-08-31', meridian: 138.8, sp500: 125.8, russell2000: 121.2 }
    ],
    '3Y': [
      { date: '2022-09-01', meridian: 100, sp500: 100, russell2000: 100 },
      { date: '2023-03-01', meridian: 112.5, sp500: 108.2, russell2000: 105.8 },
      { date: '2023-09-01', meridian: 125.8, sp500: 116.5, russell2000: 112.2 },
      { date: '2024-03-01', meridian: 138.2, sp500: 124.8, russell2000: 118.5 },
      { date: '2024-09-01', meridian: 152.5, sp500: 133.2, russell2000: 125.8 },
      { date: '2025-03-01', meridian: 168.8, sp500: 142.1, russell2000: 133.2 },
      { date: '2025-08-31', meridian: 182.5, sp500: 149.8, russell2000: 139.5 }
    ],
    '5Y': [
      { date: '2020-09-01', meridian: 100, sp500: 100, russell2000: 100 },
      { date: '2021-09-01', meridian: 118.5, sp500: 112.8, russell2000: 108.5 },
      { date: '2022-09-01', meridian: 135.2, sp500: 124.5, russell2000: 118.2 },
      { date: '2023-09-01', meridian: 155.8, sp500: 138.2, russell2000: 128.5 },
      { date: '2024-09-01', meridian: 178.5, sp500: 152.8, russell2000: 139.8 },
      { date: '2025-08-31', meridian: 198.2, sp500: 165.5, russell2000: 148.2 }
    ]
  };

  const currentData = performanceData?.[selectedTimeframe];

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
                  {entry?.dataKey === 'meridian' ? 'Meridian Portfolio' : 
                   entry?.dataKey === 'sp500' ? 'S&P 500' : 'Russell 2000'}
                </span>
              </div>
              <span className="text-sm font-medium text-foreground">
                {entry?.value?.toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 brand-shadow-subtle">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">Portfolio Performance</h3>
          <p className="text-sm text-muted-foreground">Compared to major market indices</p>
        </div>
        
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
            {timeframes?.map((timeframe) => (
              <button
                key={timeframe?.value}
                onClick={() => setSelectedTimeframe(timeframe?.value)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md brand-transition ${
                  selectedTimeframe === timeframe?.value
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background'
                }`}
              >
                {timeframe?.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
            <button
              onClick={() => setChartType('line')}
              className={`p-1.5 rounded-md brand-transition ${
                chartType === 'line' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground hover:bg-background'
              }`}
            >
              <Icon name="TrendingUp" size={16} />
            </button>
            <button
              onClick={() => setChartType('area')}
              className={`p-1.5 rounded-md brand-transition ${
                chartType === 'area' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground hover:bg-background'
              }`}
            >
              <Icon name="AreaChart" size={16} />
            </button>
          </div>
        </div>
      </div>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'line' ? (
            <LineChart data={currentData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="date" 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
                tickFormatter={(value) => new Date(value)?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              />
              <YAxis 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="meridian" 
                stroke="var(--color-primary)" 
                strokeWidth={3}
                dot={{ fill: 'var(--color-primary)', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'var(--color-primary)', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="sp500" 
                stroke="var(--color-secondary)" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: 'var(--color-secondary)', strokeWidth: 2, r: 3 }}
              />
              <Line 
                type="monotone" 
                dataKey="russell2000" 
                stroke="var(--color-accent)" 
                strokeWidth={2}
                strokeDasharray="3 3"
                dot={{ fill: 'var(--color-accent)', strokeWidth: 2, r: 3 }}
              />
            </LineChart>
          ) : (
            <AreaChart data={currentData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="date" 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
                tickFormatter={(value) => new Date(value)?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              />
              <YAxis 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="meridian" 
                stroke="var(--color-primary)" 
                fill="var(--color-primary)"
                fillOpacity={0.1}
                strokeWidth={3}
              />
              <Area 
                type="monotone" 
                dataKey="sp500" 
                stroke="var(--color-secondary)" 
                fill="var(--color-secondary)"
                fillOpacity={0.05}
                strokeWidth={2}
                strokeDasharray="5 5"
              />
              <Area 
                type="monotone" 
                dataKey="russell2000" 
                stroke="var(--color-accent)" 
                fill="var(--color-accent)"
                fillOpacity={0.05}
                strokeWidth={2}
                strokeDasharray="3 3"
              />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-4 border-t border-border">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-0.5 bg-primary rounded-full"></div>
          <span className="text-sm text-muted-foreground">Meridian Portfolio</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-0.5 bg-secondary rounded-full" style={{ background: 'repeating-linear-gradient(to right, var(--color-secondary) 0, var(--color-secondary) 3px, transparent 3px, transparent 8px)' }}></div>
          <span className="text-sm text-muted-foreground">S&P 500</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-0.5 bg-accent rounded-full" style={{ background: 'repeating-linear-gradient(to right, var(--color-accent) 0, var(--color-accent) 2px, transparent 2px, transparent 5px)' }}></div>
          <span className="text-sm text-muted-foreground">Russell 2000</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;