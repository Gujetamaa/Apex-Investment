import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PerformanceDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('1Y');
  const [animatedValues, setAnimatedValues] = useState({});

  const periods = ['1M', '3M', '6M', '1Y', '3Y', '5Y'];

  const performanceData = {
    '1M': [
      { period: 'Week 1', meridian: 2.1, sp500: 1.8, benchmark: 1.9 },
      { period: 'Week 2', meridian: 1.8, sp500: 1.2, benchmark: 1.5 },
      { period: 'Week 3', meridian: 3.2, sp500: 2.8, benchmark: 2.9 },
      { period: 'Week 4', meridian: 2.5, sp500: 2.1, benchmark: 2.2 }
    ],
    '1Y': [
      { period: 'Q1', meridian: 8.5, sp500: 7.2, benchmark: 7.8 },
      { period: 'Q2', meridian: 12.3, sp500: 10.1, benchmark: 11.2 },
      { period: 'Q3', meridian: 15.7, sp500: 13.4, benchmark: 14.1 },
      { period: 'Q4', meridian: 18.9, sp500: 16.2, benchmark: 17.3 }
    ]
  };

  const portfolioAllocation = [
    { name: 'Large Cap Equity', value: 35, color: '#1B365D' },
    { name: 'International Equity', value: 25, color: '#2E5984' },
    { name: 'Fixed Income', value: 20, color: '#D4AF37' },
    { name: 'Alternative Investments', value: 15, color: '#37474F' },
    { name: 'Cash & Equivalents', value: 5, color: '#4A5568' }
  ];

  const keyMetrics = [
    {
      title: 'Total Return (YTD)',
      value: '18.9%',
      change: '+2.7%',
      isPositive: true,
      icon: 'TrendingUp',
      benchmark: 'vs S&P 500: 16.2%'
    },
    {
      title: 'Sharpe Ratio',
      value: '1.34',
      change: '+0.12',
      isPositive: true,
      icon: 'Target',
      benchmark: 'vs Benchmark: 1.22'
    },
    {
      title: 'Max Drawdown',
      value: '-3.2%',
      change: '-0.8%',
      isPositive: true,
      icon: 'Shield',
      benchmark: 'vs S&P 500: -5.1%'
    },
    {
      title: 'Alpha Generation',
      value: '2.7%',
      change: '+0.4%',
      isPositive: true,
      icon: 'Zap',
      benchmark: 'Excess Return'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        totalReturn: 18.9,
        sharpeRatio: 1.34,
        maxDrawdown: -3.2,
        alpha: 2.7
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 brand-shadow-elevated">
          <p className="text-sm font-medium text-foreground mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry?.color }}>
              {entry?.name}: {entry?.value}%
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="BarChart3" size={24} className="text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">Performance Dashboard</span>
          </div>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Transparent Performance Tracking
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time portfolio performance with benchmark comparisons. 
            Our commitment to transparency means you always know where you stand.
          </p>
        </motion.div>

        {/* Key Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {keyMetrics?.map((metric, index) => (
            <motion.div
              key={metric?.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 brand-shadow-subtle hover:brand-shadow-elevated brand-transition"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center`}>
                  <Icon name={metric?.icon} size={20} className="text-white" />
                </div>
                <div className={`flex items-center space-x-1 text-sm ${
                  metric?.isPositive ? 'text-success' : 'text-error'
                }`}>
                  <Icon name={metric?.isPositive ? 'ArrowUp' : 'ArrowDown'} size={16} />
                  <span>{metric?.change}</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">{metric?.title}</h3>
                <div className="text-2xl font-bold text-foreground">{metric?.value}</div>
                <p className="text-xs text-muted-foreground">{metric?.benchmark}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Performance Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-card border border-border rounded-xl p-6 brand-shadow-subtle"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-foreground">Portfolio Performance Comparison</h3>
              <div className="flex items-center space-x-2">
                {periods?.map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-3 py-1 text-sm rounded-md brand-transition ${
                      selectedPeriod === period
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData?.[selectedPeriod] || performanceData?.['1Y']}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="period" stroke="#4A5568" fontSize={12} />
                  <YAxis stroke="#4A5568" fontSize={12} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line 
                    type="monotone" 
                    dataKey="meridian" 
                    stroke="#1B365D" 
                    strokeWidth={3}
                    name="Meridian Portfolio"
                    dot={{ fill: '#1B365D', strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="sp500" 
                    stroke="#4A5568" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="S&P 500"
                    dot={{ fill: '#4A5568', strokeWidth: 2, r: 3 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="benchmark" 
                    stroke="#D4AF37" 
                    strokeWidth={2}
                    name="Benchmark"
                    dot={{ fill: '#D4AF37', strokeWidth: 2, r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Portfolio Allocation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-6 brand-shadow-subtle"
          >
            <h3 className="font-semibold text-foreground mb-6">Portfolio Allocation</h3>
            <div className="h-48 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={portfolioAllocation}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {portfolioAllocation?.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry?.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Allocation']}
                    labelStyle={{ color: '#1A202C' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {portfolioAllocation?.map((item) => (
                <div key={item?.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item?.color }}
                    ></div>
                    <span className="text-muted-foreground">{item?.name}</span>
                  </div>
                  <span className="font-medium text-foreground">{item?.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white"
        >
          <h3 className="font-display text-2xl font-semibold mb-4">
            Ready to See Your Portfolio's Potential?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Get detailed performance analytics and personalized investment insights with our comprehensive dashboard.
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