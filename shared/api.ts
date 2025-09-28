/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

// BloodSync hospital request types
export type BloodType = "O+" | "O-" | "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-";

export interface CreateHospitalRequestPayload {
  hospitalName: string;
  department?: string;
  contactEmail: string;
  contactPhone?: string;
  location?: string;
  bloodType: BloodType;
  units: number; // requested units
  urgency: "immediate" | "high" | "normal";
  notes?: string;
  attachments?: { name: string; size: number; type?: string }[];
}

export interface CreateHospitalRequestResponse {
  id: string;
  createdAt: string;
  message: string;
}
