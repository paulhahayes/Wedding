// @ts-nocheck
// TODO type safe
import type { ImageProps } from "@/types/GalleryTypes";
import getBase64ImageUrl from "@/lib/utils/generateBlurPlaceholder";
import cloudinary from "cloudinary";
export async function getImages(nextCursor, length, offset) {
  let max_results = 2;
  if (offset == -1) {
    max_results = 1;
  }

  const results = await cloudinary.v2.search
    .expression(`folder:gallery/*`)
    .max_results(max_results)
    .with_field("tags")
    .next_cursor(nextCursor)
    .execute();

  let reducedResults: ImageProps[] = [];

  let i = length;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
      tags: result.tags,
    });
    i++;
  }
  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return { images: reducedResults, nextCursor: results.next_cursor };
}