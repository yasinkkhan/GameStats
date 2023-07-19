import React from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { setSelectedSport } from '@/store/slices/sportsSlice';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
// import { useGetAllNbaSeasonsQuery } from '@/store/apis/nbaApiSlice';

const SportSelector: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const sportsList = useAppSelector((state) => {
    return state.sports.sportsList;
  });

  const setSelectedSportHandler = (sportName: string) => {
    dispatch(setSelectedSport(sportName));
  };

  // const { data } = useGetAllNbaSeasonsQuery('');

  // if (data) {
  //   console.log(data.response);
  // }

  const renderedSports: JSX.Element[] = sportsList.map((sport: string, index: number): JSX.Element => {
    return (
      <Card key={index} onClick={() => setSelectedSportHandler(sport)} className="my-2 border-2 border-black">
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
        {renderedSports}
      </div>
    </>
  );
};

export default SportSelector;
