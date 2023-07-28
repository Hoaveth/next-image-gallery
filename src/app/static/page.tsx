import { UnsplashImage } from "../../services/image-gallery";
import ImageComponent from "@/components/ImageComponent";

export default async function Page() {
  const response = await fetch(
    `${process.env.API_URL}/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
    { cache: "no-store" }
  );

  const image: UnsplashImage = await response.json();

  console.log(image);
  if (!image) {
    return <div>Error with data fetching! Come back again in an hour</div>;
  }

  let width: number = 0;
  let height: number = 0;

  width = Math.min(500, image.width);
  height = (width / image.width) * image.height;

  return <ImageComponent image={image} width={width} height={height} />;
}
