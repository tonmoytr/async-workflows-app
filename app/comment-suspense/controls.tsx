"use client";

import { useState, Suspense } from "react";
import List from "./List";

export default function Controls() {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<"asc" | "desc">("desc");

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <label>
          Sort:{" "}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "asc" | "desc")}
          >
            <option value="desc">Newest</option>
            <option value="asc">Oldest</option>
          </select>
        </label>
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="px-3 py-1 border rounded"
        >
          Prev
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 border rounded"
        >
          Next
        </button>
      </div>

      <Suspense fallback={<p>Loading comments...</p>}>
        <List page={page} sort={sort} />
      </Suspense>
    </div>
  );
}
