import React, { useState, useMemo } from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';
import Icon from '../../../components/AppIcon';

/* Read CSS variable with a fallback */
const readVar = (name, fallback) => {
  if (typeof window === 'undefined') return fallback;
  const v = getComputedStyle(document.documentElement).getPropertyValue(name)?.trim();
  return v || fallback;
};

const AssetAllocation = () => {
  const [viewType, setViewType] = useState('pie');

  // Resolve theme colors (emerald + silver)
  const colors = useMemo(() => ({
    primary: readVar('--color-primary', '#0B5D47'),                 // emerald
    secondary: readVar('--color-secondary', '#C0C0C0'),             // silver
    accent: readVar('--color-accent', '#1E7F5D'),                   // lighter emerald
    slate: '#334155',
    graphite: '#88939E',
    gray: '#9CA3AF',
    warning: readVar('--color-warning', '#F59E0B'),
    error: readVar('--color-error', '#DC2626'),
    success: readVar('--color-success', '#16A34A'),
  }), []);

  // Use emerald/silver palette for slices and sectors
  const allocationData = [
    { name: 'Large Cap Equity',        value: 35, color: colors.primary,   target: 40, actual: 35 },
    { name: 'Mid Cap Equity',          value: 20, color: colors.accent,    target: 18, actual: 20 },
    { name: 'International Equity',    value: 15, color: colors.graphite,  target: 15, actual: 15 },
    { name: 'Fixed Income',            value: 18, color: colors.slate,     target: 20, actual: 18 },
    { name: 'REITs',                   value: 7,  color: colors.success,   target: 5,  actual: 7  },
    { name: 'Cash & Equivalents',      value: 5,  color: colors.gray,      target: 2,  actual: 5  }
  ];

  const sectorAllocation = [
    { name: 'Technology',              value: 22.5, color: colors.primary },
    { name: 'Healthcare',              value: 18.2, color: colors.accent },
    { name: 'Financial Services',      value: 15.8, color: colors.graphite },
    { name: 'Consumer Discretionary',  value: 12.3, color: colors.slate },
    { name: 'Industrials',             value: 10.1, color: colors.success },
    { name: 'Communication Services',  value: 8.7,  color: colors.gray },
    { name: 'Energy',                  value: 6.2,  color: colors.warning },
    { name: 'Materials',               value: 4.1,  color: '#7C8A93' },
    { name: 'Utilities',               value: 2.1,  color: '#6E7F7A' }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload?.length) {
      const data = payload?.[0]?.payload;
      return (
        <div className="bg-card border border-border rounded-lg p-3 brand-shadow-elevated">
          <p className="text-sm font-medium text-foreground mb-1">{data?.name}</p>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: data?.color }} />
            <span className="text-sm text-muted-foreground">
              {data?.value}% of portfolio
            </span>
          </div>
          {typeof data?.target === 'number' && (
            <p className="text-xs text-muted-foreground mt-1">Target: {data?.target}%</p>
          )}
        </div>
      );
    }
    return null;
  };

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    if (percent < 0.05) return null; // hide labels <5%
    const RAD = Math.PI / 180;
    const r = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + r * Math.cos(-midAngle * RAD);
    const y = cy + r * Math.sin(-midAngle * RAD);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={12}
        fontWeight="500"
      >
        {`${(percent * 100)?.toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="space-y-6">
      {/* Asset Allocation */}
      <div className="bg-card rounded-lg border border-border p-6 brand-shadow-subtle">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">Asset Allocation</h3>
            <p className="text-sm text-muted-foreground">Current portfolio distribution vs. target allocation</p>
          </div>

          <div className="flex items-center space-x-1 bg-muted rounded-lg p-1 mt-4 lg:mt-0">
            <button
              onClick={() => setViewType('pie')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md brand-transition ${
                viewType === 'pie'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-background'
              }`}
            >
              <Icon name="PieChart" size={14} className="mr-1" />
              Pie Chart
            </button>
            <button
              onClick={() => setViewType('bar')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md brand-transition ${
                viewType === 'bar'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-background'
              }`}
            >
              <Icon name="BarChart3" size={14} className="mr-1" />
              Bar Chart
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                {viewType === 'pie' ? (
                  <PieChart>
                    <Pie
                      data={allocationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={120}
                      dataKey="value"
                    >
                      {allocationData?.map((entry, i) => (
                        <Cell key={`cell-${i}`} fill={entry?.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                ) : (
                  <BarChart data={allocationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis
                      dataKey="name"
                      stroke="var(--color-muted-foreground)"
                      fontSize={12}
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis
                      stroke="var(--color-muted-foreground)"
                      fontSize={12}
                      tickFormatter={(v) => `${v}%`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="actual" fill="var(--color-primary)" name="Actual" />
                    <Bar dataKey="target" fill="var(--color-secondary)" name="Target" opacity={0.6} />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground mb-3">Allocation Breakdown</h4>
            {allocationData?.map((item, index) => {
              const diff = (item?.value - item?.target);
              const diffClass =
                diff > 0 ? 'text-warning'
                : diff < 0 ? 'text-error'
                : 'text-success';
              const sign = diff > 0 ? '+' : '';
              return (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item?.color }} />
                    <div>
                      <p className="text-sm font-medium text-foreground">{item?.name}</p>
                      <p className="text-xs text-muted-foreground">Target: {item?.target}%</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">{item?.value}%</p>
                    <p className={`text-xs ${diffClass}`}>
                      {sign}{diff.toFixed(1)}%
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sector Allocation */}
      <div className="bg-card rounded-lg border border-border p-6 brand-shadow-subtle">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-1">Sector Allocation</h3>
          <p className="text-sm text-muted-foreground">Portfolio exposure by industry sector</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sectorAllocation}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    dataKey="value"
                  >
                    {sectorAllocation?.map((entry, i) => (
                      <Cell key={`cell-sec-${i}`} fill={entry?.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground mb-3">Sector Breakdown</h4>
            <div className="max-h-72 overflow-y-auto space-y-2">
              {sectorAllocation?.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg brand-transition">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item?.color }} />
                    <span className="text-sm text-foreground">{item?.name}</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">{item?.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetAllocation;
