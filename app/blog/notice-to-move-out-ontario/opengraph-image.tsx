import { blogOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Notice to Move Out in Ontario | LeasePlain";

export default function Image() {
  return blogOgImage(
    "How Much Notice to Move Out in Ontario?",
    "Ontario",
  );
}
