import { useState, useEffect } from "react";
import gameService, {
  Game,
  FetchGamesResponse,
} from "../services/game-service";
import { CanceledError } from "axios";
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request, cancel } = gameService.getAll<FetchGamesResponse>();
    request
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => cancel();
  }, []);

  return { games, error };
};

export default useGames;
