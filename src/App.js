import React from 'react';
// import axios from 'axios';
import { NewsContextProvider } from './NewsContext.js';
import News from './components/News';

import './App.css';

const App = () => {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  );
};

export default App;
