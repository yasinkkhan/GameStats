import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { useGetAllGamesForSeasonQuery } from '@/store/apis/nbaApiSlice';

const GameList: React.FC = (): JSX.Element => {
  const selectedSeason = useAppSelector((state) => state.sports.selectedSeason);
  const { data, error, isLoading } = useGetAllGamesForSeasonQuery(selectedSeason as number, {
    skip: !selectedSeason, // Set skip to true when selectedSeason is null or undefined
  });

  return <div>Hello</div>;
};

export default GameList;
