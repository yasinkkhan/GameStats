import React from 'react';
import { useAppSelector } from '@/hooks';
import { useGetAllGamesForSeasonQuery } from '@/store/apis/nbaApiSlice';

import DatePicker from './DatePicker';

const GameList: React.FC = (): JSX.Element => {
  const selectedSeason = useAppSelector((state) => state.sports.selectedSeason);
  const seasonFirstGameDate = useAppSelector((state) => state.sports.seasonFirstGameDate);
  const seasonLastGameDate = useAppSelector((state) => state.sports.seasonLastGameDate);
  const selectedDate = useAppSelector((state) => state.sports.selectedDate);

  // TO DO
  // I don't like that I'm doing this here, I think doing this in the slices would be better.
  // (MAY BE)
  useGetAllGamesForSeasonQuery(selectedSeason as number, {
    skip: !selectedSeason, // Set skip to true when selectedSeason is null or undefined
  });

  // TO DO
  let renderCalendarComponent;
  if (seasonFirstGameDate != '' && seasonLastGameDate != '') {
    const seasonFirstGameDateObject = new Date(seasonFirstGameDate);
    const seasonLastGameDateObject = new Date(seasonLastGameDate);

    // TO DO
    // Extract this out into it's own utility function, you're repeating code here
    // Get the year, month, and date from the Date object
    const firstGameYear = seasonFirstGameDateObject.getFullYear();
    const firstGameMonth = seasonFirstGameDateObject.getMonth() + 1; // Adding 1 because getMonth() returns 0-based index (January is 0)
    const firstGameDate = seasonFirstGameDateObject.getDate();
    const lastGameYear = seasonLastGameDateObject.getFullYear();
    const lastGameMonth = seasonLastGameDateObject.getMonth() + 1; // Adding 1 because getMonth() returns 0-based index (January is 0)
    const lastGameDate = seasonLastGameDateObject.getDate();

    const firstGameFormattedDate = `${firstGameYear}-${firstGameMonth
      .toString()
      .padStart(2, '0')}-${firstGameDate.toString().padStart(2, '0')}`;
    const lastGameFormattedDate = `${lastGameYear}-${lastGameMonth.toString().padStart(2, '0')}-${lastGameDate
      .toString()
      .padStart(2, '0')}`;

    renderCalendarComponent = (
      <>
        <p>The first selectable date is: {firstGameFormattedDate}</p>
        <p>The last selectable date is: {lastGameFormattedDate}</p>
        <DatePicker
          firstSelectableDate={seasonFirstGameDateObject}
          lastSelectableDate={seasonLastGameDateObject}
        />
      </>
    );
  } else {
    renderCalendarComponent = <p>Loading....</p>;
  }

  let renderGamesOnSelectedDate;
  if (selectedDate) {
    renderGamesOnSelectedDate = <p>A date has been selected!!!</p>;
  }

  return (
    <div>
      {renderCalendarComponent}
      {renderGamesOnSelectedDate}
    </div>
  );
};

export default GameList;
