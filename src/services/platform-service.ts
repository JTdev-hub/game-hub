import create from "./http-service";

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const platformsService = create("/platforms/lists/parents");
export default platformsService;
