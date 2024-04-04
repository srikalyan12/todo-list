import React, { useState } from 'react';
import SearchInput from './Components/SearchInput';
import ListComponent from './Components/ListComponent';
import './App.css';

const App: React.FC = () => {
  const [search, onSearch ] = useState<string>('');
  return (
    <div className='app'>
      <h1 className='heading'>Todo List</h1>
     <SearchInput onSearch={onSearch} />
     <ListComponent search={search} />
    </div>
  );
}

export default App;
