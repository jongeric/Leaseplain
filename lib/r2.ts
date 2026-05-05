/**
 * Cloudflare R2 storage helpers for uploaded PDFs.
 *
 * In production, `process.env.LEASE_BUCKET` is an R2Bucket binding
 * available inside a Cloudflare Worker/Pages Function.
 *
 * For local Next.js dev, uploads are not persisted (no-op).
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type R2Bucket = any;

function getBucket(): R2Bucket | null {
  return (process.env as Record<string, unknown>).LEASE_BUCKET ?? null;
}

export async function uploadPDF(
  key: string,
  buffer: ArrayBuffer
): Promise<string | null> {
  const bucket = getBucket();
  if (!bucket) {
    console.warn("[R2] Bucket not bound — PDF not stored (local dev mode)");
    return null;
  }

  await bucket.put(key, buffer, {
    httpMetadata: { contentType: "application/pdf" },
  });

  return key;
}

export async function getPDFUrl(key: string): Promise<string | null> {
  const bucket = getBucket();
  if (!bucket) return null;

  // Generate a signed/temporary URL — in production use R2's presigned URLs
  // or serve from a Workers route.
  const obj = await bucket.get(key);
  return obj ? `https://your-r2-domain.com/${key}` : null;
}
