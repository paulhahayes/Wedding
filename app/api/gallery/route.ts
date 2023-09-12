export function temp() {
  // @ts-nocheck
  import type { ImageProps, CloudinaryApiResponse } from "@/types/GalleryTypes";
  import getBase64ImageUrl from "@/lib/utils/generateBlurPlaceholder";

  export async function getImages(options: {}) {
    const params = {
      ...options,
    };

    const paramString = Object.keys(params)
      .map((key) => `${key}=${encodeURIComponent(params[key])}`)
      .join("&");

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image?${paramString}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            process.env.CLOUDINARY_API_KEY +
              ":" +
              process.env.CLOUDINARY_API_SECRET
          ).toString("base64")}`,
        },
      }
    );

    const results = (await response.json()) as CloudinaryApiResponse;
    let reducedResults: ImageProps[] = [];

    let i = 0;
    for (let result of results.resources) {
      reducedResults.push({
        id: i,
        height: result.height,
        width: result.width,
        public_id: result.public_id,
        format: result.format,
        tags: ["tester"],
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
}
