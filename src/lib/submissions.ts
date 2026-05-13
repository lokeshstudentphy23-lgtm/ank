import { supabase } from "@/integrations/supabase/client";

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message: string;
};

export type InquiryPayload = {
  full_name: string;
  email: string;
  phone: string;
  travel_type?: string | null;
  destination?: string | null;
  travel_date?: string | null;
  travellers?: number | null;
  message?: string | null;
};

export type PackageRequestPayload = {
  package_id?: string | null;
  package_name?: string | null;
  full_name: string;
  email: string;
  phone: string;
  travel_date?: string | null;
  travellers?: number | null;
  message?: string | null;
};

export async function submitContactMessage(payload: ContactPayload) {
  const { error } = await supabase.from("contact_messages").insert(payload);
  if (error) throw new Error(error.message);
}

export async function submitInquiry(payload: InquiryPayload) {
  const { error } = await supabase.from("inquiries").insert(payload);
  if (error) throw new Error(error.message);
}

export async function submitPackageRequest(payload: PackageRequestPayload) {
  const { error } = await supabase.from("package_requests").insert(payload);
  if (error) throw new Error(error.message);
}