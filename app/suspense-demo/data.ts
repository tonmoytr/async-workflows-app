// app/suspense-demo/data.ts

export async function getData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("✅ Data loaded after 2 seconds");
    }, 2000);
  });
}
