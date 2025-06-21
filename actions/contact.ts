"use server";

import { ContactSchema } from "@/lib/validations/contact";
import type { ContactFormState } from "@/lib/types/forms";

export async function submitContact(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const result = ContactSchema.safeParse(data);

  if (!result.success) {
    return { message: "Validation failed. Please check your inputs." };
  }

  // Simulate sending logic
  await new Promise((res) => setTimeout(res, 1500));

  return { message: "Message sent successfully!" };
}
