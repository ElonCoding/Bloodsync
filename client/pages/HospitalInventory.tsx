export default function HospitalInventory() {
  const stock = [
    { type: "O+", units: 42, expirySoon: 3 },
    { type: "A+", units: 28, expirySoon: 4 },
    { type: "B-", units: 7, expirySoon: 1 },
    { type: "AB+", units: 10, expirySoon: 0 },
  ];
  return (
    <div className="container mx-auto max-w-5xl py-12">
      <h1 className="text-3xl font-bold tracking-tight">Inventory</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {stock.map((s) => (
          <div key={s.type} className="rounded-xl border bg-card p-5 shadow-sm">
            <div className="text-sm font-medium">Type {s.type}</div>
            <div className="mt-2 flex items-end justify-between">
              <div className="text-3xl font-bold">{s.units} units</div>
              <div className="text-xs text-muted-foreground">Expiring: {s.expirySoon}</div>
            </div>
            <div className="mt-3 h-2 w-full rounded-full bg-muted">
              <div className="h-2 rounded-full bg-rose-600" style={{ width: `${Math.min(100, (s.units/60)*100)}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
