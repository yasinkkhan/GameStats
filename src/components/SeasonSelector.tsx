import React from 'react';
import { useAppDispatch } from '@/hooks';
import { setSelectedSeason } from '@/store/slices/sportsSlice';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetAllNbaSeasonsQuery } from '@/store/apis/nbaApiSlice';

const SeasonSelector: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useGetAllNbaSeasonsQuery('');

  const setSelectedSeasonHandler = (season: number) => {
    dispatch(setSelectedSeason(season));
  };

  let renderedSeasons;
  if (isLoading) {
    renderedSeasons = <p>Loading Seasons...</p>;
  } else if (error) {
    renderedSeasons = <p>{error.toString()}</p>;
  } else {
    const sortedSeasons = [...data.response].sort((a, b) => b - a);
    renderedSeasons = sortedSeasons.map((season: number, index: number): JSX.Element => {
      return (
        <Card
          key={index}
          onClick={() => setSelectedSeasonHandler(season)}
          className="my-2 border-2 border-black"
        >
          <CardHeader>
            <CardTitle>{season}</CardTitle>
          </CardHeader>
        </Card>
      );
    });
  }

  return (
    <>
      <div>
        <p>Please select a season to continue</p>
        {renderedSeasons}
      </div>
    </>
  );
};

export default SeasonSelector;
