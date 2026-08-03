import { blogOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "LTB Wait Times in 2026 | LeasePlain";

export default function Image() {
  return blogOgImage(
    "How Long Does the LTB Take in 2026?",
    "Ontario",
  );
}
