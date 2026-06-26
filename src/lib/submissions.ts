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

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export async function submitContactMessage(payload: ContactPayload) {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error("Failed to send message");
}

export async function submitInquiry(payload: InquiryPayload) {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error("Failed to send inquiry");
}

export async function submitPackageRequest(payload: PackageRequestPayload) {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error("Failed to send package request");
}