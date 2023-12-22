// create a post
import { getImages } from "@/lib/utils/cloudinary";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  if (body.folder === "Bride & Groom") body.folder = "Bride-Groom";
  if (body.folder === "Post Ceremony") body.folder = "Post-Ceremony";
  if (body.folder === "Camera Rolls") body.folder = "Camera-Rolls";
  const results = await getImages(body.nextCursor, body.length, body.folder);

  return NextResponse.json(results);
}
