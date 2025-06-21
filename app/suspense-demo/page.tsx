// app/suspense-demo/page.tsx

import { Suspense } from "react";
import Demo from "./Demo";

export default function SuspenseDemoPage() {
  return (
    <main className="max-w-xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-2xl font-bold">Suspense + use(promise) Demo</h1>

      <Suspense fallback={<p>Loading fallback (SSR)...</p>}>
        <Demo />
      </Suspense>
    </main>
  );
}
