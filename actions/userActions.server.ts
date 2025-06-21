// app/actions/userActions.server.ts
"use server";

export async function updateNameInDb(name: string): Promise<boolean> {
  // Simulate database update or API call
  // Replace this with your real update logic (e.g., update DB)
  console.log("Updating name in DB:", name);

  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Return true if update was successful
  return true;
}
