import React from 'react';
import './App.css';

import SelectEventCompleteComponent from './components/SelectEventCompleteComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="SelectAutoComplete">
            <SelectEventCompleteComponent />
          </div>
      </header>
    </div>
  );
}

export default App;
