import { blogOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "N4 Non-Payment of Rent in Ontario | LeasePlain";

export default function Image() {
  return blogOgImage(
    "Got an N4 in Ontario? Non-Payment of Rent, Explained",
    "Ontario",
  );
}
