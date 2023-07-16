import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const SportSelector: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const sportsList = useAppSelector((state) => {
    return state.sports.sportsList;
  });

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
