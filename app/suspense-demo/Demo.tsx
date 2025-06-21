// app/suspense-demo/Demo.tsx
"use client";

import { use } from "react";
import { getData } from "./data";

export default function Demo() {
  const result = use(getData()); // Suspends until resolved

  return (
    <div className="p-4 border rounded bg-green-100 text-green-900">
      {result}
    </div>
  );
}
