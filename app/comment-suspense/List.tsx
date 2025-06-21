"use client";

import { use } from "react";
import { fetchComments } from "./data";

type Props = {
  page: number;
  sort: "asc" | "desc";
};

export default function List({ page, sort }: Props) {
  const comments = use(fetchComments(page, sort));

  return (
    <ul className="space-y-2 mt-4 text-sm">
      {comments.map((c) => (
        <li key={c.id} className="border p-2 rounded bg-gray-100">
          {c.message}
        </li>
      ))}
    </ul>
  );
}
