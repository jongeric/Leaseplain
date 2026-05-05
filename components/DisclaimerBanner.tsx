import { AlertCircle } from "lucide-react";

export default function DisclaimerBanner() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 items-start text-sm text-amber-800">
      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-500" />
      <p>
        <strong>Not legal advice.</strong> LeasePlain uses AI to translate lease language into plain English.
        This is for informational purposes only. Always consult a licensed attorney before signing any lease.
      </p>
    </div>
  );
}
