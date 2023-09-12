// create a post
import { getImages } from "@/lib/utils/cloudinary";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const body = await req.json();
  const results = await getImages(body.nextCursor, body.length, body.offset);
  return NextResponse.json(results);
}
