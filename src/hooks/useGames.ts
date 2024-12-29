import { useState, useEffect } from "react";
import gameService, {
  Game,
  FetchGamesResponse,
} from "../services/game-service";
import { CanceledError } from "axios";
const useGames = () => {
  const [isLoading, setLoading] = useState(false);
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = gameService.getAll<FetchGamesResponse>();
    request
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
