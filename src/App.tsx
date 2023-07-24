import './App.css';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { unsetSelectedSeason, unsetSelectedSport } from '@/store/slices/sportsSlice';
import { Button } from '@/components/ui/button';
import SportSelector from './components/SportSelector';
import SeasonSelector from './components/SeasonSelector';
import GameList from './components/GamesList';

function App() {
  const dispatch = useAppDispatch();

  const selectedSport = useAppSelector((state) => {
    return state.sports.selectedSport;
  });

  const selectedSeason = useAppSelector((state) => {
    return state.sports.selectedSeason;
  });

  const unsetSelections = () => {
    dispatch(unsetSelectedSport());
    dispatch(unsetSelectedSeason());
  };

  const showSportSelectorComponent = () => {
    if (!selectedSport) {
      return <SportSelector />;
    }
  };

  const showSeasonSelectorComponent = () => {
    if (selectedSport && !selectedSeason) {
      return <SeasonSelector />;
    }
  };

  const showGameListComponent = () => {
    if (selectedSport && selectedSeason) {
      return <GameList />;
    }
  };

  return (
    <div className="max-w-screen-sm container mx-auto px-4 box-border border-2 border-sky-500 min-h-screen">
      <h1>Game Stats</h1>
      <Button variant="destructive" onClick={unsetSelections}>
        Home
      </Button>
      {showSportSelectorComponent()}
      {showSeasonSelectorComponent()}
      {showGameListComponent()}
    </div>
  );
}

export default App;
