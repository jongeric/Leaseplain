import { blogOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Last Month's Rent Deposit in Ontario | LeasePlain";

export default function Image() {
  return blogOgImage(
    "Last Month's Rent Deposit in Ontario: Rules, Interest & Refunds",
    "Ontario",
  );
}
