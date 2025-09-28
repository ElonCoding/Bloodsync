import { useMemo, useState } from "react";

const drives = [
  { id: 1, name: "Downtown Drive", date: "Sat", time: "10:00", transit: "Bus 14", city: "Delhi" },
  { id: 2, name: "Campus Hall", date: "Sun", time: "12:00", transit: "Metro A", city: "Mumbai" },
  { id: 3, name: "Community Center", date: "Tue", time: "09:00", transit: "Tram 3", city: "Delhi" },
  { id: 4, name: "City Hospital", date: "Daily", time: "24/7", transit: "Parking", city: "Pune" },
];

export default function Search() {
  const [q, setQ] = useState("");
  const [city, setCity] = useState("");
  const results = useMemo(() => {
    return drives.filter((d) =>
      (!q || d.name.toLowerCase().includes(q.toLowerCase())) && (!city || d.city === city)
    );
  }, [q, city]);

  return (
    <div className="container mx-auto max-w-5xl py-12">
      <h1 className="text-3xl font-bold tracking-tight">Find Donation Camps</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <input placeholder="Search by name" className="rounded-md border bg-background px-3 py-2 text-sm" value={q} onChange={(e) => setQ(e.target.value)} />
        <select className="rounded-md border bg-background px-3 py-2 text-sm" value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">All Cities</option>
          {["Delhi","Mumbai","Pune"].map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <div className="text-sm text-muted-foreground self-center">{results.length} results</div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {results.map((d) => (
          <div key={d.id} className="rounded-xl border bg-card p-5 shadow-sm">
            <div className="text-sm font-medium">{d.name}</div>
            <div className="mt-1 text-sm text-muted-foreground">{d.city} • {d.date} • {d.time} • {d.transit}</div>
            <a href="#" className="mt-3 inline-block text-sm text-primary underline underline-offset-4">Get Directions</a>
          </div>
        ))}
      </div>
    </div>
  );
}
