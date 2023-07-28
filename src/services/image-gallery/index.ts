import ImageService from "./service";

export interface UnsplashImage {
  description: string;
  user: {
    username: string;
  };
  urls: {
    raw: string;
  };
  width: number;
  height: number;
}

export interface ImageServiceInterface {
  getImage(): Promise<UnsplashImage>;
}

export default ImageService;
