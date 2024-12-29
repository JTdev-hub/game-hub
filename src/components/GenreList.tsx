import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import genresService, { Genres } from "../services/genre-service";
import getCroppedImageUrl from "../image-url";

const GenreList = () => {
  const { data: genres, isLoading, error } = useData<Genres>(genresService);

  return (
    <>
      {error ? null : isLoading ? (
        <Spinner />
      ) : (
        <div>
          <List spacing={3}>
            {genres.map((genre) => (
              <HStack>
                <Image
                  src={getCroppedImageUrl(genre.image_background)}
                  boxSize="32px"
                  borderRadius={8}
                ></Image>
                <ListItem key={genre.id}>
                  <Text>{genre.name}</Text>
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
