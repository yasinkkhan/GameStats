import { Card, CardHeader, CardTitle } from '@/components/ui/card';

// interface SportsSelectorComponentProps {
//   sportsList: string[];
//   selectedSportHandler: (sport: string) => void;
// }

// const SportSelector: React.FC<SportsSelectorComponentProps> = ({
//   sportsList,
//   selectedSportHandler,
// }): JSX.Element => {
const SportSelector: React.FC = (): JSX.Element => {
  const handleClick = (sport: string) => {
    // selectedSportHandler(sport);
  };

  const RenderedSports: JSX.Element[] = sportsList.map((sport: string, index: number): JSX.Element => {
    return (
      <Card key={index} onClick={() => handleClick(sport)} className="my-2">
        <CardHeader>
          <CardTitle>{sport}</CardTitle>
        </CardHeader>
      </Card>
    );
  });

  return (
    <>
      <div>
        <h1>Game Stats</h1>
        <p>Please select a sport to continue</p>
        {RenderedSports}
      </div>
    </>
  );
};

export default SportSelector;
