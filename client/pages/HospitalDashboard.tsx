import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HospitalDashboard() {
  return (
    <div className="container mx-auto max-w-6xl py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Hospital Dashboard</h1>
        <Button asChild>
          <Link to="/register">Register</Link>
        </Button>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-4">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="text-sm font-medium">O+ Units</div>
          <div className="mt-2 text-2xl font-bold">42</div>
          <p className="text-xs text-muted-foreground">Stock level</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="text-sm font-medium">Requests</div>
          <div className="mt-2 text-2xl font-bold">7</div>
          <p className="text-xs text-muted-foreground">Pending</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="text-sm font-medium">Fulfilled</div>
          <div className="mt-2 text-2xl font-bold">28</div>
          <p className="text-xs text-muted-foreground">This week</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="text-sm font-medium">Expiring</div>
          <div className="mt-2 text-2xl font-bold">5</div>
          <p className="text-xs text-muted-foreground">Within 7 days</p>
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        <Button asChild className="bg-gradient-to-r from-rose-500 to-red-600">
          <Link to="/hospital/requests/new">New Request</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/hospital/inventory">Manage Inventory</Link>
        </Button>
      </div>
    </div>
  );
}
