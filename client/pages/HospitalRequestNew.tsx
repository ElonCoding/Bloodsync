import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import type { CreateHospitalRequestPayload, BloodType } from "@shared/api";

const bloodTypes: BloodType[] = ["O+","O-","A+","A-","B+","B-","AB+","AB-"];

export default function HospitalRequestNew() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<CreateHospitalRequestPayload>({
    hospitalName: "",
    department: "",
    contactEmail: "",
    contactPhone: "",
    location: "",
    bloodType: "O+",
    units: 1,
    urgency: "high",
    notes: "",
    attachments: [],
  });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/hospital/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          department: form.department || undefined,
          contactPhone: form.contactPhone || undefined,
          location: form.location || undefined,
          notes: form.notes || undefined,
          attachments: form.attachments && form.attachments.length ? form.attachments : undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Failed to create");
      toast({ title: "Request created", description: `ID: ${data.id}` });
      navigate("/hospital/requests");
    } catch (err: any) {
      toast({ title: "Error", description: err.message ?? String(err) });
    } finally {
      setSubmitting(false);
    }
  }

  function handleFiles(files: FileList | null) {
    if (!files) return;
    const atts = Array.from(files).map((f) => ({ name: f.name, size: f.size, type: f.type }));
    setForm((f) => ({ ...f, attachments: atts }));
  }

  return (
    <div className="container mx-auto max-w-3xl py-12">
      <h1 className="text-3xl font-bold tracking-tight">New Hospital Request</h1>
      <p className="mt-2 text-muted-foreground">Submit a blood unit request. This form validates and sends to the API.</p>

      <form onSubmit={submit} className="mt-6 space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="text-sm font-medium">Hospital Name</label>
            <input required className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" value={form.hospitalName} onChange={(e) => setForm({ ...form, hospitalName: e.target.value })} />
          </div>
          <div>
            <label className="text-sm font-medium">Department</label>
            <input className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} />
          </div>
          <div>
            <label className="text-sm font-medium">Location</label>
            <input className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
          </div>
          <div>
            <label className="text-sm font-medium">Contact Email</label>
            <input required type="email" className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" value={form.contactEmail} onChange={(e) => setForm({ ...form, contactEmail: e.target.value })} />
          </div>
          <div>
            <label className="text-sm font-medium">Contact Phone</label>
            <input className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" value={form.contactPhone} onChange={(e) => setForm({ ...form, contactPhone: e.target.value })} />
          </div>
          <div>
            <label className="text-sm font-medium">Blood Type</label>
            <select className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" value={form.bloodType} onChange={(e) => setForm({ ...form, bloodType: e.target.value as BloodType })}>
              {bloodTypes.map((bt) => (
                <option key={bt} value={bt}>{bt}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Units</label>
            <input type="number" min={1} max={20} className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" value={form.units} onChange={(e) => setForm({ ...form, units: Number(e.target.value) })} />
          </div>
          <div>
            <label className="text-sm font-medium">Urgency</label>
            <select className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" value={form.urgency} onChange={(e) => setForm({ ...form, urgency: e.target.value as any })}>
              <option value="immediate">Immediate</option>
              <option value="high">High</option>
              <option value="normal">Normal</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-medium">Notes</label>
            <textarea rows={4} className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-medium">Attachments</label>
            <input type="file" multiple onChange={(e) => handleFiles(e.target.files)} className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" />
            {form.attachments && form.attachments.length > 0 && (
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                {form.attachments.map((a, i) => (
                  <li key={i}>{a.name} • {Math.round(a.size/1024)} KB</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          <Button type="submit" disabled={submitting} className="bg-gradient-to-r from-rose-500 to-red-600">
            {submitting ? "Submitting..." : "Create Request"}
          </Button>
          <Button type="button" variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
        </div>
      </form>
    </div>
  );
}
