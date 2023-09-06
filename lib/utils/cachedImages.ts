import cloudinary from "cloudinary";
let cachedResults: any;

export default async function getResults() {
  if (!cachedResults) {
    const fetchedResults = await cloudinary.v2.search
      .expression(`folder:gallery/*`)
      .sort_by("created_at", "desc")
      .max_results(400)
      .execute();
    cachedResults = fetchedResults;
  }
  return cachedResults;
}
