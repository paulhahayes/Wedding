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
