import instance from "@/_config/axios";
import { IMovie } from "@/_interfaces/IMovie";

export const getAllMovies = async (
  params
): Promise<IMovie> => {
  try {
    const { data } = await instance.get("/movie", {
      params,
    });
    return data;
  } catch (err) {
    return [];
  }
};
