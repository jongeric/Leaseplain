import { blogOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Bad-Faith N12 and T5 Compensation in Ontario | LeasePlain";

export default function Image() {
  return blogOgImage(
    "Bad-Faith N12: What If Your Landlord Didn't Move In?",
    "Ontario",
  );
}
