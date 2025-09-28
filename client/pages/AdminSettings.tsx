import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AdminSettings() {
  const [hipaa, setHipaa] = useState(true);
  const [gdpr, setGdpr] = useState(true);
  const [smsProvider, setSmsProvider] = useState("Twilio");
  const [emailProvider, setEmailProvider] = useState("SendGrid");

  function save(e: React.FormEvent) {
    e.preventDefault();
    // Persist later
  }

  return (
    <div className="container mx-auto max-w-3xl py-12">
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      <form onSubmit={save} className="mt-6 space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={hipaa} onChange={(e)=>setHipaa(e.target.checked)} /> HIPAA compliance</label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={gdpr} onChange={(e)=>setGdpr(e.target.checked)} /> GDPR compliance</label>
          <div>
            <label className="text-sm font-medium">SMS Provider</label>
            <select className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" value={smsProvider} onChange={(e)=>setSmsProvider(e.target.value)}>
              <option>Twilio</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Email Provider</label>
            <select className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" value={emailProvider} onChange={(e)=>setEmailProvider(e.target.value)}>
              <option>SendGrid</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <Button type="submit" className="bg-gradient-to-r from-rose-500 to-red-600">Save</Button>
      </form>
    </div>
  );
}
