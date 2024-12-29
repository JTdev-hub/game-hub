import { useState, useEffect } from "react";
import genreService, {
  Genres,
  FetchGenresResponse,
} from "../services/genre-service";
import { CanceledError } from "axios";
const useGenres = () => {
  const [isLoading, setLoading] = useState(false);
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = genreService.getAll<FetchGenresResponse>();
    request
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
