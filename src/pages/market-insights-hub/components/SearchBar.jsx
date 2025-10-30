import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ onSearch, placeholder = "Search insights, topics, or authors..." }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setIsSearching(query?.length > 0);
    
    // Debounce search
    const timeoutId = setTimeout(() => {
      onSearch(query);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  };

  const handleClear = () => {
    setSearchQuery('');
    setIsSearching(false);
    onSearch('');
  };

  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {isSearching ? (
            <div className="animate-spin">
              <Icon name="Loader2" size={16} className="text-muted-foreground" />
            </div>
          ) : (
            <Icon name="Search" size={16} className="text-muted-foreground" />
          )}
        </div>
        
        <Input
          type="search"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => handleSearch(e?.target?.value)}
          className="pl-10 pr-10 bg-background border-border focus:border-primary"
        />
        
        {searchQuery && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-foreground brand-transition"
          >
            <Icon name="X" size={16} className="text-muted-foreground" />
          </button>
        )}
      </div>
      {/* Search Suggestions */}
      {searchQuery && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg brand-shadow-elevated z-50">
          <div className="p-2">
            <div className="text-xs text-muted-foreground px-3 py-2 font-medium">
              Popular Searches
            </div>
            {[
              'Federal Reserve Policy',
              'Market Volatility',
              'ESG Investing',
              'Cryptocurrency Outlook',
              'Inflation Impact'
            ]?.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => {
                  setSearchQuery(suggestion);
                  onSearch(suggestion);
                }}
                className="w-full text-left px-3 py-2 text-sm hover:bg-muted rounded brand-transition flex items-center space-x-2"
              >
                <Icon name="Search" size={14} className="text-muted-foreground" />
                <span>{suggestion}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;