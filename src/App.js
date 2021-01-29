import React from 'react';
// import axios from 'axios';
import { NewsContextProvider } from './NewsContext.js';

import './App.css';

const App = () => {
  return (
    <NewsContextProvider>
      <h1>APP</h1>
    </NewsContextProvider>
  );
};

export default App;
