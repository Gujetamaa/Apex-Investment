import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 'minimums',
      question: 'What are your minimum investment requirements?',
      answer: `Our typical minimum for discretionary portfolio management is $750,000. For investors on track to reach that level within 12–24 months, we offer planning and consultation services. We’re relationship-focused and happy to discuss your situation during a complimentary consultation.`
    },
    {
      id: 'fees',
      question: 'How are your fees structured?',
      answer: `We charge a transparent, tiered annual advisory fee based on assets under management—generally 0.60%–1.00% depending on portfolio size and complexity. We do not earn trading commissions on managed accounts, and there are no hidden platform or custodial markups. Our incentives are aligned with yours.`
    },
    {
      id: 'consultation',
      question: 'What happens during the initial consultation?',
      answer: `In a 45–60 minute session, we clarify your goals, risk tolerance, time horizon, and tax considerations. We review your current holdings, highlight opportunities, and outline how our approach could fit your objectives. This meeting is informational only—no pressure and no cost.`
    },
    {
      id: 'services',
      question: 'What services do you provide beyond investment management?',
      answer: `In addition to portfolio construction and ongoing rebalancing, we provide integrated wealth planning: retirement readiness, tax-aware strategies, cash-flow planning, concentrated-stock management, charitable giving, and estate coordination. We collaborate with your CPA and attorney for a cohesive plan.`
    },
    {
      id: 'performance',
      question: 'How do you measure and report performance?',
      answer: `You’ll have 24/7 access to a secure client portal with real-time positions and performance. We deliver detailed quarterly reports comparing results to relevant benchmarks and include commentary on drivers of return and risk. We emphasize clarity and full transparency.`
    },
    {
      id: 'philosophy',
      question: 'What is your investment philosophy?',
      answer: `Apex Capital focuses on long-term, risk-managed growth using diversified, tax-aware portfolios. We blend fundamental research with quantitative tools, employing active management where it’s additive and low-cost indexing where markets are efficient. Consistency, cost control, and discipline guide every decision.`
    },
    {
      id: 'team',
      question: 'Who will manage my portfolio?',
      answer: `You’ll work with a dedicated portfolio manager and client service associate. Our team includes CFA® charterholders and CFP® professionals with institutional experience. We schedule regular reviews and are available whenever your circumstances change.`
    },
    {
      id: 'security',
      question: 'How do you protect client assets and information?',
      answer: `Client assets are held at independent qualified custodians (e.g., Charles Schwab, Fidelity) and are not commingled with firm assets. We use multi-factor authentication, encrypted communications, and undergo periodic third-party security assessments. Apex Capital is SEC-registered and carries comprehensive insurance coverage.`
    }
  ];


  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const handleScheduleConsultation = () => {
    // Scroll to consultation scheduler
    const schedulerElement = document.querySelector('[data-tab="schedule"]');
    if (schedulerElement) {
      schedulerElement?.click();
      schedulerElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      // Fallback - scroll to top of page where tabs are
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDownloadGuide = () => {
    // Simulate download
    const downloadLink = document.createElement('a');
    downloadLink.href = '#'; // Replace with actual file URL
    downloadLink.download = 'Apex-Investment-Guide.pdf';
    downloadLink?.click();
    
    // Show confirmation
    alert('Investment Guide download started! Check your Downloads folder.');
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-display font-semibold text-foreground mb-2">
          Frequently Asked Questions(FAQs)
        </h3>
        <p className="text-muted-foreground">
          Common questions about our services and consultation process.
        </p>
      </div>

      <div className="space-y-4">
        {faqs?.map((faq) => (
          <div
            key={faq?.id}
            className="bg-card rounded-xl border border-border brand-transition brand-hover-lift"
          >
            <button
              onClick={() => toggleFAQ(faq?.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-xl brand-transition hover:bg-surface/50"
            >
              <h4 className="font-medium text-foreground pr-4">
                {faq?.question}
              </h4>
              <Icon
                name={openFAQ === faq?.id ? 'ChevronUp' : 'ChevronDown'}
                size={20}
                className={`text-muted-foreground brand-transition ${
                  openFAQ === faq?.id ? 'text-primary' : ''
                }`}
              />
            </button>
            
            <div
              className={`overflow-hidden brand-transition ${
                openFAQ === faq?.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-4">
                <div className="pt-2 border-t border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    {faq?.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/20">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="HelpCircle" size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-2">
              Still Have Questions?
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Our team is here to help. Schedule a consultation or contact us directly for a more tailored answer to your investment questions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="default"
                size="sm"
                iconName="Calendar"
                iconPosition="left"
                onClick={handleScheduleConsultation}
                className="pulse-subtle"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="Download"
                iconPosition="left"
                onClick={handleDownloadGuide}
              >
                Download Investment Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;