import './App.css';
import { useAppSelector } from '@/hooks';
import SportSelector from './components/SportSelector';

function App() {
  const selectedSport = useAppSelector((state) => {
    return state.sports.selectedSport;
  });

  return (
    <div className="max-w-screen-sm container mx-auto px-4 box-border border-2 border-sky-500 min-h-screen">
      {!selectedSport && <SportSelector />}
    </div>
  );
}

export default App;
