import React from 'react';
import { useAppSelector } from '@/hooks';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Define the interface for the game object
interface Game {
  id: number;
}

const GamesOnSingleDate: React.FC = (): JSX.Element => {
  const gamesOnSelectedDate = useAppSelector((state) => state.sports.gamesOnSelectedDate);

  const renderedGames = gamesOnSelectedDate.map((game: Game) => {
    console.log(game);

    return (
      <Card key={game.id}>
        <CardContent>
          <table className="border">
            <tbody className="border">
              <tr className="border">
                <td className="border">
                  <img
                    className="max-w-10 max-h-10"
                    src={game.teams.visitors.logo}
                    alt={game.teams.visitors.name}
                  />
                </td>
              </tr>
              <tr className="border">
                <td className="border">
                  <img className="max-w-10 max-h-10" src={game.teams.home.logo} alt={game.teams.home.name} />
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    );
  });

  return (
    <>
      <div>{renderedGames}</div>
    </>
  );
};

export default GamesOnSingleDate;
