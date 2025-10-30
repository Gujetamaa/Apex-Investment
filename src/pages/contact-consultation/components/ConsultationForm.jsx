import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    portfolioSize: '',
    investmentGoals: '',
    timeline: '',
    interests: [],
    currentSituation: '',
    preferredContact: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Load saved form data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('consultationFormData');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData(parsed);
      } catch (error) {
        console.error('Error loading saved form data:', error);
      }
    }
  }, []);

  // Save form data to localStorage whenever it changes (except when submitted)
  useEffect(() => {
    if (!submitted) {
      localStorage.setItem('consultationFormData', JSON.stringify(formData));
    }
  }, [formData, submitted]);

  const portfolioSizeOptions = [
    { value: '100k-500k', label: '$100K - $500K' },
    { value: '500k-1m', label: '$500K - $1M' },
    { value: '1m-5m', label: '$1M - $5M' },
    { value: '5m-10m', label: '$5M - $10M' },
    { value: '10m+', label: '$10M+' },
    { value: 'prefer-not-to-say', label: 'Prefer not to say' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (within 1 month)' },
    { value: '3-months', label: 'Within 3 months' },
    { value: '6-months', label: 'Within 6 months' },
    { value: '1-year', label: 'Within 1 year' },
    { value: 'exploring', label: 'Just exploring options' }
  ];

  const contactPreferenceOptions = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone' },
    { value: 'text', label: 'Text Message' },
    { value: 'any', label: 'Any method' }
  ];

  const interestOptions = [
    'Portfolio Management',
    'Retirement Planning',
    'Tax Strategy',
    'Estate Planning',
    'Alternative Investments',
    'ESG/Sustainable Investing',
    'Risk Management',
    'Wealth Transfer'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleInterestChange = (interest, checked) => {
    setFormData(prev => ({
      ...prev,
      interests: checked
        ? [...prev?.interests, interest]
        : prev?.interests?.filter(i => i !== interest)
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex?.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex?.test(phone?.replace(/[\s\-\(\)]/g, ''));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.firstName?.trim()) newErrors.firstName = 'First name is required';
    if (!formData?.lastName?.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData?.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData?.portfolioSize) newErrors.portfolioSize = 'Portfolio size is required';
    if (!formData?.investmentGoals?.trim()) {
      newErrors.investmentGoals = 'Investment goals are required';
    } else if (formData?.investmentGoals?.trim().length < 10) {
      newErrors.investmentGoals = 'Please provide more detailed investment goals (at least 10 characters)';
    }
    if (!formData?.timeline) newErrors.timeline = 'Timeline is required';
    if (!formData?.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate random success/failure for demo
          Math.random() > 0.1 ? resolve() : reject(new Error('Network connection failed'));
        }, 2000);
      });

      // Success
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
    } catch (error) {
      setSubmitError(error?.message || 'Failed to submit consultation request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    const resetData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      portfolioSize: '',
      investmentGoals: '',
      timeline: '',
      interests: [],
      currentSituation: '',
      preferredContact: '',
      agreeToTerms: false
    };
    setFormData(resetData);
    setErrors({});
    setSubmitted(false);
    setSubmitError('');
    
    // Clear saved form data
    localStorage.removeItem('consultationFormData');
  };

  if (submitted) {
    return (
      <div className="bg-card rounded-xl p-8 brand-shadow-elevated">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
            <Icon name="CheckCircle" size={32} className="text-success" />
          </div>
          
          <div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-2">
              Thank You, {formData?.firstName}!
            </h3>
            <p className="text-muted-foreground">
              Your consultation request has been submitted successfully. Our team will review your information and contact you within 4 hours.
            </p>
          </div>

          <div className="bg-surface rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-3">What Happens Next?</h4>
            <ul className="text-sm text-muted-foreground space-y-2 text-left">
              <li className="flex items-start space-x-2">
                <span className="text-primary font-medium">1.</span>
                <span>Our team reviews your consultation request</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary font-medium">2.</span>
                <span>We'll contact you via {formData?.preferredContact || 'your preferred method'} to schedule</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary font-medium">3.</span>
                <span>Receive pre-consultation materials and questionnaire</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary font-medium">4.</span>
                <span>45-minute personalized consultation session</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="Plus"
              iconPosition="left"
              onClick={handleReset}
            >
              Submit Another Request
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              onClick={() => window.open('tel:+15551234567', '_self')}
            >
              Call Us Directly
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-8 brand-shadow-elevated">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="FileText" size={24} className="text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-display font-semibold text-foreground">
            Consultation Request
          </h3>
          <p className="text-sm text-muted-foreground">
            Help us prepare for your personalized consultation
          </p>
        </div>
      </div>

      {submitError && (
        <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="AlertCircle" size={20} className="text-destructive mt-0.5" />
            <div>
              <h4 className="font-medium text-destructive mb-1">Submission Failed</h4>
              <p className="text-sm text-destructive/80">{submitError}</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            type="text"
            placeholder="Enter your first name"
            value={formData?.firstName}
            onChange={(e) => handleInputChange('firstName', e?.target?.value)}
            error={errors?.firstName}
            required
          />
          <Input
            label="Last Name"
            type="text"
            placeholder="Enter your last name"
            value={formData?.lastName}
            onChange={(e) => handleInputChange('lastName', e?.target?.value)}
            error={errors?.lastName}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@example.com"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            error={errors?.email}
            required
          />
          <Input
            label="Phone Number"
            type="tel"
            placeholder="(555) 123-4567"
            value={formData?.phone}
            onChange={(e) => handleInputChange('phone', e?.target?.value)}
            error={errors?.phone}
            required
          />
        </div>

        {/* Investment Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Current Portfolio Size"
            placeholder="Select portfolio range"
            options={portfolioSizeOptions}
            value={formData?.portfolioSize}
            onChange={(value) => handleInputChange('portfolioSize', value)}
            error={errors?.portfolioSize}
            required
          />
          <Select
            label="Investment Timeline"
            placeholder="When are you looking to start?"
            options={timelineOptions}
            value={formData?.timeline}
            onChange={(value) => handleInputChange('timeline', value)}
            error={errors?.timeline}
            required
          />
        </div>

        <Input
          label="Investment Goals"
          type="text"
          placeholder="e.g., Retirement planning, wealth preservation, growth..."
          description="Briefly describe your primary investment objectives (minimum 10 characters)"
          value={formData?.investmentGoals}
          onChange={(e) => handleInputChange('investmentGoals', e?.target?.value)}
          error={errors?.investmentGoals}
          required
        />

        {/* Areas of Interest */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Areas of Interest <span className="text-muted-foreground">(Select all that apply)</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {interestOptions?.map((interest) => (
              <Checkbox
                key={interest}
                label={interest}
                checked={formData?.interests?.includes(interest)}
                onChange={(e) => handleInterestChange(interest, e?.target?.checked)}
                size="sm"
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Input
            label="Current Financial Situation"
            type="text"
            placeholder="Brief description of your current investment approach..."
            description="Optional: Help us understand your current investment strategy"
            value={formData?.currentSituation}
            onChange={(e) => handleInputChange('currentSituation', e?.target?.value)}
          />

          <Select
            label="Preferred Contact Method"
            placeholder="How would you like us to reach you?"
            options={contactPreferenceOptions}
            value={formData?.preferredContact}
            onChange={(value) => handleInputChange('preferredContact', value)}
          />
        </div>

        {/* Terms and Privacy */}
        <div className="bg-surface rounded-lg p-4">
          <Checkbox
            label="I agree to the consultation terms and privacy policy"
            description="By checking this box, you consent to Apex Capital contacting you about investment services and agree to our privacy policy."
            checked={formData?.agreeToTerms}
            onChange={(e) => handleInputChange('agreeToTerms', e?.target?.checked)}
            error={errors?.agreeToTerms}
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            type="submit"
            variant="default"
            size="lg"
            iconName="Send"
            iconPosition="left"
            className="flex-1 pulse-subtle"
            disabled={isSubmitting}
            loading={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={handleReset}
            disabled={isSubmitting}
          >
            Clear Form
          </Button>
        </div>

        <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground pt-4 border-t border-border">
          <div className="flex items-center space-x-1">
            <Icon name="Lock" size={14} />
            <span>SSL Encrypted</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Shield" size={14} />
            <span>Privacy Protected</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="CheckCircle" size={14} />
            <span>No Spam Guarantee</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ConsultationForm;