import type { ImageServiceInterface, UnsplashImage } from ".";
import { fetcher } from "../../lib/axiosInstance";

export default class ImageService implements ImageServiceInterface {
  async getImage(): Promise<UnsplashImage[]> {
    try {
      const data: UnsplashImage[] = await fetcher(
        `${process.env.API_URL}/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
      );

      return data;
    } catch (error) {}
  }
}
