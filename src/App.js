import './App.css';
import { useState } from "react";

import Header from './components/Header';
import CharitiesList from './components/CharitiesList';
import SearchBox from './components/SearchBox';

function App() {
  const [ searchTerm, setSearchTerm ] = useState('');

  return (
    <>
      <Header />
      <SearchBox updateSearch={setSearchTerm} />
      <CharitiesList searchTerm={searchTerm} />
    </>
  );
}

export default App;
