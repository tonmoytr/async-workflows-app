"use client";

import { useActionState } from "react";

import { submitContact } from "@/actions/contact";
import { toast } from "sonner";
import type { ContactFormState } from "@/lib/types/forms";
import SubmitButton from "./SubmitButton";

const initialState: ContactFormState = { message: "" };

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  if (state?.message) {
    toast.success(state.message);
  }

  return (
    <form action={formAction} className="space-y-4">
      <input
        name="name"
        placeholder="Your Name"
        className="w-full border px-3 py-2 rounded"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        className="w-full border px-3 py-2 rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full border px-3 py-2 rounded"
        required
      />
      <SubmitButton />
    </form>
  );
}
