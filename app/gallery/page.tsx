//TODO pagination, + scroll,, re-render on upload / delete

import Content from "./Content";
import { getImages } from "@/lib/utils/cloudinary";

export default async function GalleryPage() {
  const { images, nextCursor } = await getImages("", 0, 0);
  return (
    <>
      <Content images={images} nextCursor={nextCursor} />
    </>
  );
}
