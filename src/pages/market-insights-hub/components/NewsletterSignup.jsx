import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-white" />
        </div>
        <h3 className="font-display text-xl font-semibold text-white mb-2">
          Welcome to Meridian Insights!
        </h3>
        <p className="text-white/90 text-sm mb-4">
          You'll receive our weekly market analysis and exclusive investment insights directly in your inbox.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsSubscribed(false)}
          className="border-white/30 text-white hover:bg-white hover:text-primary"
        >
          Subscribe Another Email
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6">
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <Icon name="Mail" size={24} className="text-white" />
        </div>
        <h3 className="font-display text-xl font-semibold text-white mb-2">
          Stay Ahead of the Market
        </h3>
        <p className="text-white/90 text-sm">
          Get weekly insights, market analysis, and exclusive investment strategies delivered to your inbox.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
        />
        
        <Button
          type="submit"
          variant="secondary"
          fullWidth
          loading={isLoading}
          iconName="ArrowRight"
          iconPosition="right"
          className="bg-white text-primary hover:bg-white/90"
        >
          Subscribe to Insights
        </Button>
      </form>
      <div className="mt-4 pt-4 border-t border-white/20">
        <div className="flex items-center justify-center space-x-4 text-xs text-white/80">
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={12} />
            <span>5,000+ subscribers</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Shield" size={12} />
            <span>No spam, unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;