import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const ConsultationScheduler = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [meetingType, setMeetingType] = useState('');
  const [selectedAdvisor, setSelectedAdvisor] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Load saved form data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('consultationSchedulerData');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setSelectedDate(parsed.selectedDate || '');
        setSelectedTime(parsed.selectedTime || '');
        setMeetingType(parsed.meetingType || '');
        setSelectedAdvisor(parsed.selectedAdvisor || '');
      } catch (error) {
        console.error('Error loading saved form data:', error);
      }
    }
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    if (!submitted) {
      const formData = {
        selectedDate,
        selectedTime,
        meetingType,
        selectedAdvisor
      };
      localStorage.setItem('consultationSchedulerData', JSON.stringify(formData));
    }
  }, [selectedDate, selectedTime, meetingType, selectedAdvisor, submitted]);

  const meetingTypeOptions = [
    { value: 'video', label: 'Video Call', description: 'Secure video consultation via our platform' },
    { value: 'phone', label: 'Phone Call', description: 'Traditional phone consultation' },
    { value: 'in-person', label: 'In-Person Meeting', description: 'Visit our office for face-to-face consultation' }
  ];

  const advisorOptions = [
    { value: 'hannah-lee', label: 'Hannah Lee, CFA', description: 'Portfolio Strategy & Risk Management' },
    { value: 'porto-garcia', label: 'Porto Garcia, CFP', description: 'Wealth Planning & Tax Strategy' },
    { value: 'james-chen', label: 'Joshua Chen, CFA', description: 'Alternative Investments & ESG' },
    { value: 'hailey-quinn', label: 'Hailey Quinn, CFP', description: 'Retirement & Estate Planning' }
  ];

  const availableTimes = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' }
  ];

  const handleSchedule = async () => {
    // Validate required fields
    if (!selectedDate || !selectedTime || !meetingType) {
      setSubmitError('Please fill in all required fields');
      return;
    }

    // Validate date is in the future
    const selectedDateTime = new Date(`${selectedDate}T${selectedTime}:00`);
    const now = new Date();
    if (selectedDateTime <= now) {
      setSubmitError('Please select a future date and time');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate random success/failure for demo
          Math.random() > 0.1 ? resolve() : reject(new Error('Network error'));
        }, 2000);
      });

      // Success - show confirmation
      setSubmitted(true);
      
      // Optional: Send confirmation email
      console.log('Consultation scheduled:', {
        date: selectedDate,
        time: selectedTime,
        type: meetingType,
        advisor: selectedAdvisor
      });
      
    } catch (error) {
      setSubmitError(error?.message || 'Failed to schedule consultation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmitError('');
    setSelectedDate('');
    setSelectedTime('');
    setMeetingType('');
    setSelectedAdvisor('');
    
    // Clear saved form data
    localStorage.removeItem('consultationSchedulerData');
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
              Consultation Scheduled Successfully!
            </h3>
            <p className="text-muted-foreground">
              We've confirmed your consultation for {selectedDate ? new Date(selectedDate)?.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              }) : 'your selected date'} at {availableTimes?.find(t => t?.value === selectedTime)?.label || selectedTime}
            </p>
          </div>

          <div className="bg-surface rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-3">Next Steps</h4>
            <ul className="text-sm text-muted-foreground space-y-2 text-left">
              <li className="flex items-start space-x-2">
                <Icon name="Mail" size={16} className="text-accent mt-0.5" />
                <span>Confirmation email sent to your registered email</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Calendar" size={16} className="text-accent mt-0.5" />
                <span>Calendar invitation will follow shortly</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Phone" size={16} className="text-accent mt-0.5" />
                <span>We'll call 15 minutes before your scheduled time</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="FileText" size={16} className="text-accent mt-0.5" />
                <span>Pre-consultation questionnaire will be emailed</span>
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
              Schedule Another Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Download"
              iconPosition="left"
              onClick={() => window.open('mailto:consultations@apexcapital.com', '_self')}
            >
              Download Preparation Guide
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-8 brand-shadow-elevated">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Calendar" size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-display font-semibold text-foreground">
            Schedule Your Consultation
          </h3>
          <p className="text-sm text-muted-foreground">
            Book a personalized investment strategy session
          </p>
        </div>
      </div>

      {submitError && (
        <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="AlertCircle" size={20} className="text-destructive mt-0.5" />
            <div>
              <h4 className="font-medium text-destructive mb-1">Scheduling Failed</h4>
              <p className="text-sm text-destructive/80">{submitError}</p>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="date"
            label="Preferred Date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e?.target?.value)}
            min={new Date()?.toISOString()?.split('T')?.[0]}
            required
          />
          
          <Select
            label="Available Times"
            placeholder="Select time slot"
            options={availableTimes}
            value={selectedTime}
            onChange={setSelectedTime}
            required
          />
        </div>

        <Select
          label="Meeting Type"
          placeholder="Choose consultation format"
          options={meetingTypeOptions}
          value={meetingType}
          onChange={setMeetingType}
          required
        />

        <Select
          label="Preferred Advisor"
          placeholder="Select advisor based on expertise"
          description="Our system will match you with the best advisor for your needs"
          options={advisorOptions}
          value={selectedAdvisor}
          onChange={setSelectedAdvisor}
          searchable
        />

        <div className="bg-surface rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon name="Clock" size={20} className="text-accent mt-0.5" />
            <div>
              <h4 className="font-medium text-foreground mb-1">What to Expect</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 45-minute comprehensive consultation</li>
                <li>• Portfolio review and goal assessment</li>
                <li>• Personalized investment strategy recommendations</li>
                <li>• No obligation or fees for initial consultation</li>
              </ul>
            </div>
          </div>
        </div>

        <Button
          variant="default"
          size="lg"
          fullWidth
          iconName="Calendar"
          iconPosition="left"
          onClick={handleSchedule}
          disabled={!selectedDate || !selectedTime || !meetingType || isSubmitting}
          loading={isSubmitting}
          className="pulse-subtle"
        >
          {isSubmitting ? 'Scheduling...' : 'Schedule Consultation'}
        </Button>

        <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Icon name="Shield" size={14} />
            <span>Secure & Confidential</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={14} />
            <span>Response within 2 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationScheduler;