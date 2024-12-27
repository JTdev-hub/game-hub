import useGames from "../hooks/useGames";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, setGames, error, setError } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.id}, {game.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
