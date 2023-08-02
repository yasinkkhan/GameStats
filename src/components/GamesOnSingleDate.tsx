import React from 'react';
import { useAppSelector } from '@/hooks';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const GamesOnSingleDate: React.FC = (): JSX.Element => {
  const gamesOnSelectedDate = useAppSelector((state) => state.sports.gamesOnSelectedDate);

  const renderedGames = gamesOnSelectedDate.map((game: { id: number }) => {
    console.log(game);

    return (
      // How can I define a type for my game object in this section
      <Card key={game.id}>
        <CardContent>
          <p>Card Content</p>
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
