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
  const { data, error, isLoading } = useGetAllGamesForSeasonQuery(selectedSeason as number, {
    skip: !selectedSeason, // Set skip to true when selectedSeason is null or undefined
  });

  // let renderedContent;
  // if (isLoading) {
  //   renderedContent = <p>Loading...</p>;
  // } else if (error) {
  //   // TO DO
  //   // You need to confirm what type error actually is
  //   // and handle it more gracefully
  //   renderedContent = <p>{error.toString()}</p>;
  // } else if (data) {
  //   // TO DO
  //   // I'm currently handling populating the first game in the season
  //   // and the last game in the season directly in this component
  //   // to populate the selectable dates in the calendar
  //   // I want to do this in my reducers instead
  //   // console.log(data);
  //   renderedContent = <p>Got data</p>;
  // } else {
  //   renderedContent = <p>Something weird happened</p>;
  // }

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
      <p>The last selectable date is: {seasonFirstGameDate}</p>
      {renderCalendarComponent}
    </div>
  );
};

export default GameList;
