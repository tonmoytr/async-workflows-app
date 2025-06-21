// app/comments-suspense/page.tsx

import Controls from "./controls";

export default function CommentsSuspensePage() {
  return (
    <main className="max-w-xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-2xl font-bold">Suspense Comments</h1>
      <Controls />
    </main>
  );
}
