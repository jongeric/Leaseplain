import { blogOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Withholding Rent Over Repairs in Ontario | LeasePlain";

export default function Image() {
  return blogOgImage(
    "Can I Withhold Rent Over Repairs in Ontario?",
    "Ontario",
  );
}
