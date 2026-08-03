import { blogOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Post-2018 Rent Control Exemption in Ontario | LeasePlain";

export default function Image() {
  return blogOgImage(
    "Why Isn't My Rent Capped? The Post-2018 Exemption",
    "Ontario",
  );
}
