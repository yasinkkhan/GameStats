import React from 'react';
import { useAppSelector } from '@/hooks';
import { useGetAllGamesForSeasonQuery } from '@/store/apis/nbaApiSlice';

import DatePicker from './DatePicker';

const GameList: React.FC = (): JSX.Element => {
  const selectedSeason = useAppSelector((state) => state.sports.selectedSeason);
  const seasonFirstGameDate = useAppSelector((state) => state.sports.seasonFirstGameDate);
  const seasonLastGameDate = useAppSelector((state) => state.sports.seasonLastGameDate);

  // TO DO
  // I don't like that I'm doing this here, I think doing this in the slices would be better.
  // (MAY BE)
  useGetAllGamesForSeasonQuery(selectedSeason as number, {
    skip: !selectedSeason, // Set skip to true when selectedSeason is null or undefined
  });

  let renderCalendarComponent;
  if (seasonFirstGameDate != '' && seasonLastGameDate != '') {
    const seasonFirstGameDateObject = new Date(seasonFirstGameDate);
    const seasonLastGameDateObject = new Date(seasonLastGameDate);

    renderCalendarComponent = (
      <DatePicker
        firstSelectableDate={seasonFirstGameDateObject}
        lastSelectableDate={seasonLastGameDateObject}
      />
    );
  }

  return (
    <div>
      <p>The first selectable date is: {seasonFirstGameDate}</p>
      <p>The last selectable date is: {seasonLastGameDate}</p>
      {renderCalendarComponent}
    </div>
  );
};

export default GameList;
