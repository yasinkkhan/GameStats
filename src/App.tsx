import './App.css';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { unsetSelectedSport } from '@/store/slices/sportsSlice';
import { Button } from '@/components/ui/button';
import SportSelector from './components/SportSelector';

function App() {
  const dispatch = useAppDispatch();

  const selectedSport = useAppSelector((state) => {
    return state.sports.selectedSport;
  });

  const unsetSelectedSportHandler = () => {
    dispatch(unsetSelectedSport());
  };

  return (
    <div className="max-w-screen-sm container mx-auto px-4 box-border border-2 border-sky-500 min-h-screen">
      <h1>Game Stats</h1>
      <Button variant="destructive" onClick={() => unsetSelectedSportHandler()}>
        Home
      </Button>
      {!selectedSport && <SportSelector />}
    </div>
  );
}

export default App;
