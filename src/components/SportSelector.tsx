interface SportsSelectorComponentProps {
  sportsList: string[];
}

const SportSelector: React.FC<SportsSelectorComponentProps> = ({ sportsList }): JSX.Element => {
  const RenderedSports: JSX.Element[] = sportsList.map((sport: string, index: number): JSX.Element => {
    return <p key={index}>{sport}</p>;
  });

  return (
    <>
      <div>
        <h1>Game Stats</h1>
        <p>Please select a sport to continue</p>
        {RenderedSports}
      </div>
    </>
  );
};

export default SportSelector;
