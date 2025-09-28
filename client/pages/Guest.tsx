import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Guest() {
  return (
    <div className="container mx-auto max-w-5xl py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Guest Overview</h1>
        <Button asChild className="bg-gradient-to-r from-rose-500 to-red-600">
          <Link to="/register">Register</Link>
        </Button>
      </div>
      <p className="mt-3 text-muted-foreground max-w-3xl">
        Explore BloodSync features: real-time blood requests, AI donor matching, awareness campaigns, and hospital dashboards.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="text-sm font-medium">Awareness</div>
          <p className="mt-2 text-sm text-muted-foreground">Blogs, FAQs, and videos to learn and dispel myths.</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="text-sm font-medium">Find Camps</div>
          <p className="mt-2 text-sm text-muted-foreground">Search nearby donation drives with transport info.</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="text-sm font-medium">Emergency Alerts</div>
          <p className="mt-2 text-sm text-muted-foreground">Opt-in SMS/Email for emergencies in your area.</p>
        </div>
      </div>
    </div>
  );
}
