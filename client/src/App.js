import './App.css';

import React from 'react';
import './App.css';
import Main from './pages/Main';
import { LocationProvider } from './utils/LocationContext';

function App() {
  return (
    <LocationProvider>
      <div className="App">
        <Main />
      </div>
    </LocationProvider>
  );
}

export default App;
