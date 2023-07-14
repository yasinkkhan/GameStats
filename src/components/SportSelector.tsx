interface SportsSelectorComponentProps {
  sportsList: string[];
}

const SportSelector: React.FC<SportsSelectorComponentProps> = ({ sportsList }) => {
  return (
    <>
      <div>
        <h1>Game Stats</h1>
        <p>Please select a sport to continue</p>
        {sportsList.map((sport: string, index: number) => (
          <p key={index}>{sport}</p>
        ))}
      </div>
    </>
  );
};

export default SportSelector;
