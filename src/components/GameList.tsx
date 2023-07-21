import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { useGetAllGamesForSeasonQuery } from '@/store/apis/nbaApiSlice';

const GameList: React.FC = (): JSX.Element => {
  const selectedSeason = useAppSelector((state) => state.sports.selectedSeason);
  const { data, error, isLoading } = useGetAllGamesForSeasonQuery(selectedSeason as number, {
    skip: !selectedSeason, // Set skip to true when selectedSeason is null or undefined
  });

  let renderedContent;
  if (isLoading) {
    renderedContent = <p>Loading...</p>;
  } else if (error) {
    // TO DO
    // You need to confirm what type error actually is
    // and handle it more gracefully
    renderedContent = <p>{error.toString()}</p>;
  } else if (data) {
    console.log(data);
    renderedContent = <p>Got data</p>;
  } else {
    renderedContent = <p>Something weird happened</p>;
  }

  return <div>{renderedContent}</div>;
};

export default GameList;
