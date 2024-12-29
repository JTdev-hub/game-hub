import useData from "../hooks/useData";
import genresService, { Genres } from "../services/genre-service";

const GenreList = () => {
  const { data: genres } = useData<Genres>(genresService);
  return (
    <div>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.slug}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
