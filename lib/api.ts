import { FieldValues, SubmitHandler } from "react-hook-form";

export const sendContactForm: SubmitHandler<FieldValues> = async (data) => {
  return await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });
};

export const sendRsvpForm: SubmitHandler<FieldValues> = async (data) => {
  return await fetch("/api/rsvp", {
    method: "POST",
    body: JSON.stringify(data),
    credentials: "same-origin",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });
};

export const loadImagePage = async (data: {
  nextCursor: string;
  length: number;
  folder: string;
}) => {
  const response = await fetch("/api/gallery", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok.");
  }
  const res = await response.json();
  return { ...res, tab: data.folder };
};
