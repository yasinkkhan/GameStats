import './App.css';

import { useState } from 'react';

import SportSelector from './components/SportSelector';

function App() {
  const [sportsList] = useState(['NBA', 'EPL', 'NHL', 'MLB', 'NFL']);
  const [selectedSport, setSelectedSport] = useState('');

  return (
    <div className="max-w-screen-sm container mx-auto px-4 box-border border-2 border-sky-500 min-h-screen">
      <SportSelector sportsList={sportsList} />
    </div>
  );
}

export default App;
