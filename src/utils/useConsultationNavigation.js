import { useNavigate } from 'react-router-dom';

export const useConsultationNavigation = () => {
  const navigate = useNavigate();

  const navigateToConsultation = (tabId = 'schedule') => {
    navigate('/contact-consultation');
    
    // Small delay to ensure navigation completes before attempting to activate tab
    setTimeout(() => {
      const tabButton = document.querySelector(`[data-tab="${tabId}"]`);
      if (tabButton) {
        tabButton.click();
      }
    }, 100);
  };

  const navigateToScheduler = () => navigateToConsultation('schedule');
  const navigateToForm = () => navigateToConsultation('form');
  const navigateToContact = () => navigateToConsultation('contact');

  return {
    navigateToConsultation,
    navigateToScheduler,
    navigateToForm,
    navigateToContact
  };
};