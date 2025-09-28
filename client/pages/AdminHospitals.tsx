export default function AdminHospitals() {
  const hospitals = [
    { id: 1, name: "City Hospital", city: "Delhi", requests: 12 },
    { id: 2, name: "Metro Care", city: "Mumbai", requests: 7 },
  ];
  return (
    <div className="container mx-auto max-w-5xl py-12">
      <h1 className="text-3xl font-bold tracking-tight">Hospitals</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {hospitals.map((h) => (
          <div key={h.id} className="rounded-xl border bg-card p-5 shadow-sm">
            <div className="text-sm font-medium">{h.name}</div>
            <div className="text-xs text-muted-foreground">{h.city}</div>
            <div className="mt-2 text-sm">Requests this month: <b>{h.requests}</b></div>
          </div>
        ))}
      </div>
    </div>
  );
}
