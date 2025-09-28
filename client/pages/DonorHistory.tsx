export default function DonorHistory() {
  const history = [
    { id: "D-1001", date: "2025-02-10", type: "Whole Blood", units: 1, location: "City Hospital" },
    { id: "D-0975", date: "2024-10-03", type: "Plasma", units: 1, location: "Downtown Drive" },
    { id: "D-0931", date: "2024-06-14", type: "Whole Blood", units: 1, location: "Campus Hall" },
  ];
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <h1 className="text-3xl font-bold tracking-tight">Donation History</h1>
      <div className="mt-6 overflow-x-auto rounded-lg border">
        <table className="min-w-full text-sm">
          <thead className="bg-muted/50 text-left">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Date</th>
              <th className="p-3">Type</th>
              <th className="p-3">Units</th>
              <th className="p-3">Location</th>
            </tr>
          </thead>
          <tbody>
            {history.map((h) => (
              <tr key={h.id} className="border-t">
                <td className="p-3 font-mono">{h.id}</td>
                <td className="p-3">{h.date}</td>
                <td className="p-3">{h.type}</td>
                <td className="p-3">{h.units}</td>
                <td className="p-3">{h.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
