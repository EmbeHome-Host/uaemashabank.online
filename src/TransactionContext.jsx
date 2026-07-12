import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create a context
const TransactionContext = createContext();

// Create a provider component
export const TransactionProvider = ({ children }) => {
  const [input2, setInput2] = useState('');

  return (
    <TransactionContext.Provider value={{ input2, setInput2 }}>
      {children}
    </TransactionContext.Provider>
  );
};

// Add prop validation for the provider component
TransactionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Create a custom hook to access the context
export const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransaction must be used within a TransactionProvider');
  }
  return context;
};
