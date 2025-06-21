"use server";

import { saveComment } from "@/lib/validations/comments";

export async function addComment(message: string) {
  await new Promise((res) => setTimeout(res, 1000)); // Simulate delay
  const saved = saveComment(message);
  return saved;
}
