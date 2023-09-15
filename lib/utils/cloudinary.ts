// @ts-nocheck

import type { ImageProps } from "@/types/GalleryTypes";
import getBase64ImageUrl from "@/lib/utils/generateBlurPlaceholder";
import cloudinary from "cloudinary";

export async function getImages(nextCursor, length, offset) {
  let max_results = 10;
  if (offset == -1) {
    max_results = 1;
  }

  setTimeout(() => {}, 4000);

  let results;
  if (nextCursor !== "") {
    results = await cloudinary.v2.search
      .expression(`folder:gallery/*`)
      .max_results(max_results)
      .with_field("tags")
      .sort_by("created_at", "desc")
      .execute();
  } else {
    results = await cloudinary.v2.search
      .expression(`folder:gallery/*`)
      .max_results(max_results)
      .with_field("tags")
      .next_cursor(nextCursor)
      .execute();
  }

  let reducedResults: ImageProps[] = [];

  let i = length;
  if (offset == -1) {
    i = 0;
  }
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
