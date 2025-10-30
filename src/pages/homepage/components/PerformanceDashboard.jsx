import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const readVar = (name, fallback) => {
  if (typeof window === 'undefined') return fallback;
  const v = getComputedStyle(document.documentElement).getPropertyValue(name)?.trim();
  return v || fallback;
};

const PerformanceDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('1Y');
  const periods = ['1M', '3M', '6M', '1Y', '3Y', '5Y'];

  /* Resolve theme colors from CSS variables (with fallbacks) */
  const colors = useMemo(() => ({
    primary: readVar('--color-primary', '#0B5D47'),                // emerald
    primaryFg: readVar('--color-primary-foreground', '#FFFFFF'),
    secondary: readVar('--color-secondary', '#C0C0C0'),            // silver
    mutedFg: readVar('--color-muted-foreground', '#6B7280'),
    foreground: readVar('--color-foreground', '#1F2937'),
    accent: readVar('--color-accent', '#1E7F5D'),
    border: readVar('--color-border', '#E5E7EB')
  }), []);

  /* Sample data (kept compact) */
  const performanceData = {
    '1M': [
      { period: 'Week 1', apex: 2.1, sp500: 1.8, benchmark: 1.9 },
      { period: 'Week 2', apex: 1.8, sp500: 1.2, benchmark: 1.5 },
      { period: 'Week 3', apex: 3.2, sp500: 2.8, benchmark: 2.9 },
      { period: 'Week 4', apex: 2.5, sp500: 2.1, benchmark: 2.2 }
    ],
    '1Y': [
      { period: 'Q1', apex: 8.5, sp500: 7.2, benchmark: 7.8 },
      { period: 'Q2', apex: 12.3, sp500: 10.1, benchmark: 11.2 },
      { period: 'Q3', apex: 15.7, sp500: 13.4, benchmark: 14.1 },
      { period: 'Q4', apex: 18.9, sp500: 16.2, benchmark: 17.3 }
    ]
  };

  /* Allocation colors now match emerald/silver palette */
  const allocationColors = [
    colors.primary,
    colors.accent,
    '#88939E',     // cool silver/graphite
    '#334155',     // slate
    '#9CA3AF'      // gray
  ];

  const portfolioAllocation = [
    { name: 'Large Cap Equity', value: 25, color: allocationColors[0] },
    { name: 'International Equity', value: 35, color: allocationColors[1] },
    { name: 'Fixed Income', value: 20, color: allocationColors[2] },
    { name: 'Alternative Investments', value: 15, color: allocationColors[3] },
    { name: 'Cash & Equivalents', value: 5,  color: allocationColors[4] }
  ];

  const keyMetrics = [
    { title: 'Total Return (YTD)', value: '18.9%', change: '+2.7%', isPositive: true, icon: 'TrendingUp', hint: 'vs S&P 500: 16.2%' },
    { title: 'Sharpe Ratio',       value: '1.34',  change: '+0.12', isPositive: true, icon: 'Target',      hint: 'vs Benchmark: 1.22' },
    { title: 'Max Drawdown',       value: '-3.2%', change: '-0.8%', isPositive: true, icon: 'Shield',      hint: 'vs S&P 500: -5.1%' },
    { title: 'Alpha (Annualized)', value: '2.7%',  change: '+0.4%', isPositive: true, icon: 'Zap',         hint: 'Excess Return' }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
    return (
      <div className="bg-card border border-border rounded-lg p-3 brand-shadow-elevated">
        <p className="text-sm font-medium text-foreground mb-2">{label}</p>
        {payload.map((entry, i) => (
          <p key={i} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}%
          </p>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero / Title */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl mb-10 border border-border bg-gradient-to-br from-primary/10 via-surface to-secondary/20"
        >
          <div className="px-6 py-10 md:px-10 md:py-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground grid place-items-center">
                <Icon name="BarChart3" size={20} />
              </div>
              <span className="text-sm font-medium tracking-wide text-primary uppercase">Apex Performance</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Transparent, Real-Time Portfolio Intelligence
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Benchmark comparisons, risk context, and allocation clarity—designed in Apex emerald & silver.
            </p>
          </div>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {keyMetrics.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-2xl p-6 brand-shadow-subtle hover:brand-shadow-elevated brand-transition"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary grid place-items-center">
                  <Icon name={m.icon} size={18} className="text-white" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${m.isPositive ? 'text-success' : 'text-error'}`}>
                  <Icon name={m.isPositive ? 'ArrowUp' : 'ArrowDown'} size={16} />
                  <span>{m.change}</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">{m.title}</div>
                <div className="mt-1 text-2xl font-bold text-foreground">{m.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{m.hint}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Performance (switched to AreaChart with subtle gradient for premium feel) */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 brand-shadow-subtle"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-foreground">Performance vs Benchmarks</h3>
              <div className="flex flex-wrap items-center gap-2">
                {periods.map((p) => (
                  <button
                    key={p}
                    onClick={() => setSelectedPeriod(p)}
                    className={`px-3 py-1 text-sm rounded-md brand-transition ${
                      selectedPeriod === p
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData[selectedPeriod] || performanceData['1Y']}>
                  <defs>
                    <linearGradient id="apexPrimary" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={colors.primary} stopOpacity={0.35} />
                      <stop offset="95%" stopColor={colors.primary} stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
                  <XAxis dataKey="period" stroke={colors.mutedFg} fontSize={12} />
                  <YAxis stroke={colors.mutedFg} fontSize={12} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="apex"
                    name="Apex Portfolio"
                    stroke={colors.primary}
                    fill="url(#apexPrimary)"
                    strokeWidth={3}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="sp500"
                    name="S&P 500"
                    stroke="#9CA3AF"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ r: 2 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="benchmark"
                    name="Benchmark"
                    stroke={colors.secondary}
                    strokeWidth={2}
                    dot={{ r: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Allocation */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-6 brand-shadow-subtle"
          >
            <h3 className="font-semibold text-foreground mb-6">Portfolio Allocation</h3>
            <div className="h-52 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={portfolioAllocation}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={85}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {portfolioAllocation.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v) => [`${v}%`, 'Allocation']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {portfolioAllocation.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                  <span className="font-medium text-foreground">{item.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white"
        >
          <h3 className="font-display text-2xl font-semibold mb-3">See Your Portfolio’s Potential</h3>
          <p className="text-lg/7 opacity-90 mb-6 max-w-2xl mx-auto">
            Dive into the full dashboard for detailed analytics, risk insights, and downloadable reports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/performance-dashboard">
              <Button
                variant="secondary"
                size="lg"
                iconName="BarChart3"
                iconPosition="left"
                className="bg-white text-primary hover:bg-gray-50"
              >
                View Full Dashboard
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              iconName="Download"
              iconPosition="left"
              className="border-white text-white hover:bg-white/10"
            >
              Download Report
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceDashboard;
