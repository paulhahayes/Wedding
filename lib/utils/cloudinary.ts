// @ts-nocheck

import type { ImageProps } from "@/types/GalleryTypes";
import getBase64ImageUrl from "@/lib/utils/generateBlurPlaceholder";
import cloudinary from "cloudinary";

export async function getImages(nextCursor, length, folder) {
  let results;

  results = await cloudinary.v2.search
    .expression(`folder:${folder}/*`)
    .next_cursor(nextCursor)
    .with_field("tags")
    .sort_by("created_at", "desc")
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

export async function getImagesAfterUpload(nextCursor, folder) {}
