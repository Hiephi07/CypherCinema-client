import instance from "@/_config/axios";
import { IMovie } from "@/_interfaces/IMovie";

export class MovieService {
  static getAll = async (): Promise<IMovie[]> => {
    try {
      const { data } = await instance.get("/movies");
      return data;
    } catch (error) {
      return Promise.reject();
    }
  };
  static add = async () => {};
  static getById = async () => {};
  static edit = async () => {};
  static deleteById = async () => {};
}
