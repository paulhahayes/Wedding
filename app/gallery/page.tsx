//TODO pagination, + scroll,, re-render on upload / delete

import Content from "./Content";
import { getImages } from "../actions/getImages";
import UploadBar from "./UploadBar";

export default async function GalleryPage() {
  const images = await getImages();

  return (
    <>
      <UploadBar />
      <Content images={images} />
    </>
  );
}
