import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function AdminCampaigns() {
  const campaigns = [
    { id: 1, title: "Monsoon Drive", status: "Scheduled", date: "2025-07-01" },
    { id: 2, title: "Campus Week", status: "Draft", date: "2025-08-14" },
  ];
  return (
    <div className="container mx-auto max-w-5xl py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Campaigns</h1>
        <Button asChild className="bg-gradient-to-r from-rose-500 to-red-600"><Link to="/admin/campaigns/new">New Campaign</Link></Button>
      </div>
      <div className="mt-6 overflow-x-auto rounded-lg border">
        <table className="min-w-full text-sm">
          <thead className="bg-muted/50 text-left">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="p-3">{c.title}</td>
                <td className="p-3">{c.status}</td>
                <td className="p-3">{c.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
