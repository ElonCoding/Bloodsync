import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Register() {
  const { toast } = useToast();
  const [role, setRole] = useState<"donor" | "hospital">("donor");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    bloodType: "O+",
    hospitalName: "",
    location: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Registration submitted", description: `Role: ${role}` });
  };

  const bloodTypes = ["O+","O-","A+","A-","B+","B-","AB+","AB-"] as const;

  return (
    <div className="container mx-auto max-w-2xl py-12">
      <h1 className="text-3xl font-bold tracking-tight">Register</h1>
      <p className="mt-2 text-muted-foreground">Create a secure account to donate or manage hospital requests.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <div>
          <label className="text-sm font-medium">Role</label>
          <div className="mt-2 flex gap-2">
            <Button type="button" variant={role === "donor" ? "default" : "outline"} onClick={() => setRole("donor")}>Donor</Button>
            <Button type="button" variant={role === "hospital" ? "default" : "outline"} onClick={() => setRole("hospital")}>Hospital</Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="text-sm font-medium">Full Name</label>
            <input className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <input type="password" className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
          </div>

          {role === "donor" && (
            <>
              <div>
                <label className="text-sm font-medium">Blood Type</label>
                <select className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" value={form.bloodType} onChange={(e) => setForm({ ...form, bloodType: e.target.value })}>
                  {bloodTypes.map((bt) => (
                    <option key={bt} value={bt}>{bt}</option>
                  ))}
                </select>
              </div>
            </>
          )}

          {role === "hospital" && (
            <>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Hospital Name</label>
                <input className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" value={form.hospitalName} onChange={(e) => setForm({ ...form, hospitalName: e.target.value })} />
              </div>
            </>
          )}

          <div className="sm:col-span-2">
            <label className="text-sm font-medium">Location</label>
            <input className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
          </div>
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} required />
          I agree to data processing and consent to contact.
        </label>

        <Button type="submit" className="bg-gradient-to-r from-rose-500 to-red-600">Create Account</Button>
      </form>
    </div>
  );
}
