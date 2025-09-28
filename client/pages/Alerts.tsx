import { useState } from "react";

export default function Alerts() {
  const [sms, setSms] = useState(true);
  const [email, setEmail] = useState(true);
  const alerts = [
    { id: 1, title: "Urgent O+ needed", when: "2h ago", area: "Delhi" },
    { id: 2, title: "AB- low stock", when: "1d ago", area: "Pune" },
  ];
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <h1 className="text-3xl font-bold tracking-tight">Alerts</h1>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={sms} onChange={(e)=>setSms(e.target.checked)} /> SMS Notifications</label>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={email} onChange={(e)=>setEmail(e.target.checked)} /> Email Notifications</label>
      </div>
      <div className="mt-6 grid gap-3">
        {alerts.map((a) => (
          <div key={a.id} className="rounded-lg border bg-card p-4"><div className="text-sm font-medium">{a.title}</div><div className="text-xs text-muted-foreground">{a.area} • {a.when}</div></div>
        ))}
      </div>
    </div>
  );
}
