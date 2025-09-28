import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Donate() {
  const { toast } = useToast();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [consent, setConsent] = useState(false);

  function schedule(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) {
      toast({ title: "Consent required", description: "Please agree to proceed." });
      return;
    }
    toast({ title: "Donation scheduled", description: `${date} at ${time} • ${location || "TBD"}` });
  }

  return (
    <div className="container mx-auto max-w-2xl py-12">
      <h1 className="text-3xl font-bold tracking-tight">Schedule Donation</h1>
      <p className="mt-2 text-muted-foreground">Pick a time and location for your next donation.</p>

      <form onSubmit={schedule} className="mt-6 space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium">Date</label>
            <input type="date" required className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div>
            <label className="text-sm font-medium">Time</label>
            <input type="time" required className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-medium">Location</label>
            <input placeholder="Clinic, drive, or address" className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          I confirm I meet eligibility requirements.
        </label>
        <Button type="submit" className="bg-gradient-to-r from-rose-500 to-red-600">Confirm</Button>
      </form>
    </div>
  );
}
