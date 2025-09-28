import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Donor() {
  return (
    <div className="container mx-auto max-w-5xl py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Donor Dashboard</h1>
        <Button asChild>
          <Link to="/register">Register</Link>
        </Button>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="text-sm font-medium">Next Eligible Date</div>
          <div className="mt-2 text-2xl font-bold">Aug 28</div>
          <p className="text-xs text-muted-foreground">Based on your last donation</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="text-sm font-medium">Rewards</div>
          <div className="mt-2 text-2xl font-bold">480 pts</div>
          <p className="text-xs text-muted-foreground">Redeem with partners</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="text-sm font-medium">Matches Today</div>
          <div className="mt-2 text-2xl font-bold">3</div>
          <p className="text-xs text-muted-foreground">Nearby requests matched</p>
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        <Button asChild className="bg-gradient-to-r from-rose-500 to-red-600">
          <Link to="/donate">Donate Now</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/donor/history">View History</Link>
        </Button>
      </div>
    </div>
  );
}
