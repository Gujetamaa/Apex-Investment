import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../components/AppIcon';
import Button from '../components/ui/Button';

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toast) => {
    const id = Date.now().toString();
    const newToast = { id, ...toast };
    
    setToasts(prev => [...prev, newToast]);
    
    // Auto remove after duration
    if (toast.duration !== 0) {
      setTimeout(() => {
        removeToast(id);
      }, toast.duration || 5000);
    }
    
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const showToast = useCallback((message, type = 'info', options = {}) => {
    return addToast({
      message,
      type,
      ...options
    });
  }, [addToast]);

  const showSuccess = useCallback((message, options = {}) => {
    return showToast(message, 'success', options);
  }, [showToast]);

  const showError = useCallback((message, options = {}) => {
    return showToast(message, 'error', options);
  }, [showToast]);

  const showWarning = useCallback((message, options = {}) => {
    return showToast(message, 'warning', options);
  }, [showToast]);

  const showInfo = useCallback((message, options = {}) => {
    return showToast(message, 'info', options);
  }, [showToast]);

  const value = {
    toasts,
    addToast,
    removeToast,
    showToast,
    showSuccess,
    showError,
    showWarning,
    showInfo
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

const ToastContainer = ({ toasts, removeToast }) => {
  const getToastIcon = (type) => {
    switch (type) {
      case 'success': return 'CheckCircle';
      case 'error': return 'AlertCircle';
      case 'warning': return 'AlertTriangle';
      default: return 'Info';
    }
  };

  const getToastColors = (type) => {
    switch (type) {
      case 'success': return 'bg-success/10 border-success/20 text-success';
      case 'error': return 'bg-destructive/10 border-destructive/20 text-destructive';
      case 'warning': return 'bg-warning/10 border-warning/20 text-warning';
      default: return 'bg-primary/10 border-primary/20 text-primary';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 300, scale: 0.3 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.5, transition: { duration: 0.2 } }}
            className={`max-w-sm w-full bg-card border rounded-lg shadow-lg p-4 ${getToastColors(toast.type)}`}
          >
            <div className="flex items-start space-x-3">
              <Icon 
                name={getToastIcon(toast.type)} 
                size={20} 
                className="flex-shrink-0 mt-0.5" 
              />
              <div className="flex-1 min-w-0">
                {toast.title && (
                  <h4 className="text-sm font-medium mb-1">{toast.title}</h4>
                )}
                <p className="text-sm opacity-90">{toast.message}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeToast(toast.id)}
                className="flex-shrink-0 h-6 w-6 p-0 opacity-70 hover:opacity-100"
              >
                <Icon name="X" size={14} />
              </Button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};