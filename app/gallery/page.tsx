//TODO Upload, Pagination, + scroll,, re-render on upload / delete

import Content from "./Content";
import { getImages } from "./getImages";

export default async function GalleryPage() {
  const images = await getImages();

  return <Content images={images} />;
}
