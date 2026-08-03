import { blogOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Heat and Air Conditioning in Ontario Rentals | LeasePlain";

export default function Image() {
  return blogOgImage(
    "Is Your Landlord Required to Provide Heat & AC in Ontario?",
    "Ontario",
  );
}
