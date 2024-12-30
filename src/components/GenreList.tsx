import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useData from "../hooks/useData";
import genresService, { Genres } from "../services/genre-service";
import getCroppedImageUrl from "../image-url";

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useData<Genres>(genresService);

  return (
    <>
      {error ? null : isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Heading fontSize={"2xl"} marginBottom={3}>
            Genres
          </Heading>
          <List spacing={3}>
            {genres.map((genre) => (
              <HStack key={genre.id}>
                <Image
                  src={getCroppedImageUrl(genre.image_background)}
                  boxSize="32px"
                  objectFit="cover"
                  borderRadius={8}
                ></Image>
                <ListItem key={genre.id}>
                  <Button
                    onClick={() => onSelectGenre(genre)}
                    variant="link"
                    fontSize="lg"
                    whiteSpace="normal"
                    textAlign="left"
                    fontWeight={
                      genre.id === selectedGenre?.id ? "bold" : "normal"
                    }
                  >
                    {genre.name}
                  </Button>
                </ListItem>
              </HStack>
            ))}
          </List>
        </div>
      )}
    </>
  );
};

export default GenreList;
