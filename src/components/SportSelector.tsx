import React from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { setSelectedSport } from '@/store/slices/sportsSlice';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const SportSelector: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const sportsList = useAppSelector((state) => {
    return state.sports.sportsList;
  });

  const setSelectedSportHandler = (sportName: string) => {
    dispatch(setSelectedSport(sportName));
  };

  const RenderedSports: JSX.Element[] = sportsList.map((sport: string, index: number): JSX.Element => {
    return (
      <Card key={index} onClick={() => setSelectedSportHandler(sport)} className="my-2">
        <CardHeader>
          <CardTitle>{sport}</CardTitle>
        </CardHeader>
      </Card>
    );
  });

  return (
    <>
      <div>
        <p>Please select a sport to continue</p>
        {RenderedSports}
      </div>
    </>
  );
};

export default SportSelector;
