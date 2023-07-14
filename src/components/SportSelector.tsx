interface SportsSelectorComponentProps {
  sportsList: string[];
}

const SportSelector: React.FC<SportsSelectorComponentProps> = ({ sportsList }) => {
  const RenderedSports = sportsList.map((sport: string, index: number): JSX.Element => {
    return <p key={index}>{sport}</p>;
  });

  return (
    <>
      <div>
        <h1>Game Stats</h1>
        <p>Please select a sport to continue</p>
        {}
      </div>
    </>
  );
};

export default SportSelector;
