import React from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { useGetAllGamesForSeasonQuery } from '@/store/apis/nbaApiSlice';

const GameList: React.FC = (): JSX.Element => {
  const selectedSeason = useAppSelector((state) => state.sports.selectedSeason);

  if (selectedSeason) {
    const { data, error, isLoading } = useGetAllGamesForSeasonQuery(selectedSeason);
  }

  return <div>Hello</div>;
};

export default GameList;
