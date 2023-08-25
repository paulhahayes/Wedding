import { FieldValues, SubmitHandler } from "react-hook-form";

export const sendContactForm: SubmitHandler<FieldValues> = async (data) => {
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });
};

export const sendRsvpForm: SubmitHandler<FieldValues> = async (data) => {
  const res: Response = await fetch("/api/rsvp", {
    method: "POST",
    body: JSON.stringify(data),
    credentials: "same-origin",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });
  return res;
};
