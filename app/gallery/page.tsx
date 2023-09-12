//TODO pagination, + scroll,, re-render on upload / delete

import Content from "./Content";
import { getImages } from "@/lib/utils/cloudinary";
import UploadBar from "./UploadBar";

export default async function GalleryPage() {
  const { images, nextCursor } = await getImages();

  return (
    <>
      <UploadBar />
      <Content images={images} nextCursor={nextCursor} />
    </>
  );
}
