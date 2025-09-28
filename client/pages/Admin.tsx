import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="container mx-auto max-w-6xl py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Admin Console</h1>
        <Button asChild>
          <Link to="/register">Register</Link>
        </Button>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="text-sm font-medium">Users</div>
          <p className="mt-2 text-sm text-muted-foreground">Manage donors, hospitals, and roles.</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="text-sm font-medium">Campaigns</div>
          <p className="mt-2 text-sm text-muted-foreground">Create and schedule awareness campaigns.</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="text-sm font-medium">Settings</div>
          <p className="mt-2 text-sm text-muted-foreground">Platform configurations and compliance.</p>
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        <Button asChild className="bg-gradient-to-r from-rose-500 to-red-600">
          <Link to="/admin/campaigns/new">New Campaign</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/admin/users">Manage Users</Link>
        </Button>
      </div>
    </div>
  );
}
