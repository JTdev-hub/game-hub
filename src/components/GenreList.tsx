import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();
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
