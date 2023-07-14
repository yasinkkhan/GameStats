import { Card, CardHeader, CardTitle } from '@/components/ui/card';

interface SportsSelectorComponentProps {
  sportsList: string[];
}

const SportSelector: React.FC<SportsSelectorComponentProps> = ({ sportsList }): JSX.Element => {
  const RenderedSports: JSX.Element[] = sportsList.map((sport: string, index: number): JSX.Element => {
    return (
      <Card key={index} className="my-2">
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
