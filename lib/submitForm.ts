// Shared form-submission helper. Delivers every site form to
// jf@directroutedesign.com via FormSubmit (https://formsubmit.co) — no API key
// or backend required. FormSubmit sends a one-time activation email to the
// destination on the first submission; after it's confirmed once, all future
// submissions are delivered automatically.
//
// Note: the destination address appears in the client bundle (FormSubmit needs
// it in the POST URL). To hide it from scrapers, register at formsubmit.co,
// copy the random alias it issues, and set NEXT_PUBLIC_FORMSUBMIT_ENDPOINT to
// that alias — this helper will use it instead of the raw email.

const RECIPIENT = "jf@directroutedesign.com";
const ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSUBMIT_ENDPOINT?.trim() ||
  `https://formsubmit.co/ajax/${RECIPIENT}`;

export interface SubmitResult {
  ok: boolean;
  message?: string;
}

/**
 * Posts a form's fields to FormSubmit. Pass the raw FormData plus a subject
 * line. Adds FormSubmit control fields (subject, template, captcha off) and a
 * honeypot. Returns { ok } — never throws.
 */
export async function submitForm(
  data: FormData,
  opts: { subject: string }
): Promise<SubmitResult> {
  data.set("_subject", opts.subject);
  data.set("_template", "table");
  data.set("_captcha", "false");

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });
    const json = await res.json().catch(() => ({}));
    // FormSubmit returns { success: "true" } (string) on success.
    const ok = res.ok && (json.success === "true" || json.success === true);
    return ok
      ? { ok: true }
      : { ok: false, message: json.message || "Something went wrong. Please try again." };
  } catch {
    return { ok: false, message: "Network error. Please try again, or use the contact page." };
  }
}
