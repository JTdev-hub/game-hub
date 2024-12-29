import create from "./http-service";

export interface Genres {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export interface FetchGenresResponse {
  count: number;
  results: Genres[];
}

export default create("/genres");
