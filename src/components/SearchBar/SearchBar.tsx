import { useState } from 'react';
import { SearchBarContainer, SearchBarWrapper, SearchBarInput, SearchBarButton } from './SearchBarStyles';

interface SearchBarProps {
    onSearch: (searchQuery: string) => void;
  }
  
  function SearchBar({ onSearch }: SearchBarProps) {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSearchButtonClick = () => {
      onSearch(searchQuery);
    };
  return (
    <div className='search-bar-container'>
       <div className='search-bar'>
        <input className='search-bar input' type="text" value={searchQuery} onChange={handleSearchInputChange} placeholder="Search for movies..." />
        <button className='search-bar button' onClick={handleSearchButtonClick}>Search</button>
      </div>
    </div>
  );
}
export default SearchBar;