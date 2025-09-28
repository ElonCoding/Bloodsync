import { RequestHandler } from "express";
import { z } from "zod";
import { CreateHospitalRequestPayload, CreateHospitalRequestResponse } from "@shared/api";

const payloadSchema = z.object({
  hospitalName: z.string().min(2),
  department: z.string().optional(),
  contactEmail: z.string().email(),
  contactPhone: z.string().optional(),
  location: z.string().optional(),
  bloodType: z.enum(["O+","O-","A+","A-","B+","B-","AB+","AB-"]),
  units: z.number().int().min(1).max(20),
  urgency: z.enum(["immediate","high","normal"]),
  notes: z.string().max(2000).optional(),
  attachments: z.array(z.object({ name: z.string(), size: z.number().nonnegative(), type: z.string().optional() })).optional(),
});

function genId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export const createHospitalRequest: RequestHandler = (req, res) => {
  const parse = payloadSchema.safeParse(req.body as CreateHospitalRequestPayload);
  if (!parse.success) {
    return res.status(400).json({ message: "Invalid payload", issues: parse.error.issues });
  }
  const id = genId();
  const response: CreateHospitalRequestResponse = {
    id,
    createdAt: new Date().toISOString(),
    message: "Request created",
  };
  return res.status(201).json(response);
};
