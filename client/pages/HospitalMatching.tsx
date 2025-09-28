export default function HospitalMatching() {
  const matches = [
    { id: "R-1201", patient: "F, 32", type: "O+", status: "Pending", eta: "Awaiting donor" },
    { id: "R-1200", patient: "M, 61", type: "A-", status: "Matched", eta: "2h" },
    { id: "R-1199", patient: "F, 18", type: "AB+", status: "Searching", eta: "—" },
  ];
  return (
    <div className="container mx-auto max-w-5xl py-12">
      <h1 className="text-3xl font-bold tracking-tight">AI Matching</h1>
      <div className="mt-6 overflow-x-auto rounded-lg border">
        <table className="min-w-full text-sm">
          <thead className="bg-muted/50 text-left">
            <tr>
              <th className="p-3">Request</th>
              <th className="p-3">Patient</th>
              <th className="p-3">Type</th>
              <th className="p-3">Status</th>
              <th className="p-3">ETA</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((m) => (
              <tr key={m.id} className="border-t">
                <td className="p-3 font-mono">{m.id}</td>
                <td className="p-3">{m.patient}</td>
                <td className="p-3">{m.type}</td>
                <td className="p-3">{m.status}</td>
                <td className="p-3">{m.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
