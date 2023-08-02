import React from 'react';
import { useAppSelector } from '@/hooks';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const GamesOnSingleDate: React.FC = (): JSX.Element => {
  const gamesOnSelectedDate = useAppSelector((state) => state.sports.gamesOnSelectedDate);

  const renderedGames = gamesOnSelectedDate.map((game: { id: number }) => {
    console.log(game);

    return (
      <Card key={game.id}>
        <CardContent>
          <table>
            <tbody>
              <tr></tr>
              <tr></tr>
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
