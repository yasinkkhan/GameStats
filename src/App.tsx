import './App.css';

import SportSelector from './components/SportSelector';

function App() {
  return (
    <div className="max-w-screen-sm container mx-auto px-4 box-border border-2 border-sky-500 min-h-screen">
      <SportSelector />
      {/* {selectedSport} */}
    </div>
  );
}

export default App;
