// create a post
import { search, getImages } from "@/lib/utils/cloudinary";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const body = await req.json();
  const results = await search(body);
  return NextResponse.json(results);
}
