import { IMovie } from "@/_interfaces/IMovie";
import {
  MovieService,
  getAllMovies,
} from "@/_services/movie";
import { useQuery } from "@tanstack/react-query";
export const useMovieQuery = () => {
  const { data, ...any } = useQuery({
    queryKey: ["MOVIE_KEY"],
    queryFn: async () => {
      return await MovieService.getAll();
    },
  });

  return { data, ...any };
};
