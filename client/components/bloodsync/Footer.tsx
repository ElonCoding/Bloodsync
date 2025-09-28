import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto grid grid-cols-1 gap-8 py-10 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-rose-500 to-red-600" />
            <span className="text-base font-semibold">BloodSync</span>
          </div>
          <p className="text-sm text-muted-foreground">
            A secure platform connecting donors, hospitals, and communities to save lives.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Platform</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/dashboard" className="hover:text-foreground">Hospital Dashboard</Link></li>
            <li><Link to="/campaigns" className="hover:text-foreground">Awareness</Link></li>
            <li><Link to="/search" className="hover:text-foreground">Find Camps</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Compliance</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>HIPAA-ready</li>
            <li>GDPR-friendly</li>
            <li>Security-first design</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Email: support@bloodsync.health</li>
            <li>For emergencies, contact local services</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} BloodSync. All rights reserved.
      </div>
    </footer>
  );
}
