import React from 'react';
import { useAppSelector } from '@/hooks';

const GamesOnSingleDate: React.FC = (): JSX.Element => {
  const gamesOnSelectedDate = useAppSelector((state) => state.sports.gamesOnSelectedDate);

  const renderedGames = gamesOnSelectedDate.map((game) => {
    console.log(game);

    return <table></table>;
  });

  return (
    <>
      <div>
        <table>
          <th>
            <tr></tr>
          </th>
          <td>
            <tr></tr>
          </td>
        </table>
        {renderedGames}
      </div>
    </>
  );
};

export default GamesOnSingleDate;
