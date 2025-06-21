"use client";

import { useState, useOptimistic, useTransition } from "react";
import { addComment } from "@/actions/comments";

type Comment = { id: string; message: string };

export default function CommentBox({
  initialComments,
}: {
  initialComments: Comment[];
}) {
  const [text, setText] = useState("");
  const [comments, setComments] = useState(initialComments);

  const [optimisticComments, addOptimisticComment] = useOptimistic<
    Comment[],
    string
  >(comments, (state, newMessage) => [
    { id: `optimistic-${Date.now()}`, message: newMessage },
    ...state,
  ]);

  const COMMENTS_PER_PAGE = 5;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(optimisticComments.length / COMMENTS_PER_PAGE);

  const [isPending, startTransition] = useTransition();

  const startPaginate = (nextPage: number) => {
    startTransition(() => {
      setPage(nextPage);
    });
  };

  async function handleSubmit(formData: FormData) {
    const newMessage = formData.get("message")?.toString() || "";
    if (!newMessage.trim()) return;

    addOptimisticComment(newMessage);
    setText("");

    const saved = await addComment(newMessage);
    setComments((prev) => [saved, ...prev]);
  }

  const startIndex = (page - 1) * COMMENTS_PER_PAGE;
  const paginatedComments = optimisticComments.slice(
    startIndex,
    startIndex + COMMENTS_PER_PAGE
  );

  return (
    <form action={handleSubmit} className="space-y-4">
      <input
        name="message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a comment..."
        className="w-full border rounded px-3 py-2"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Post
      </button>

      <ul className="space-y-2 mt-4 min-h-[160px]">
        {paginatedComments.map((comment) => (
          <li
            key={comment.id}
            className="border p-2 rounded bg-gray-100 text-sm"
          >
            {comment.message}
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <div className="flex justify-between items-center pt-2">
          <button
            type="button"
            className="text-blue-500 disabled:text-gray-400"
            disabled={page === 1 || isPending}
            onClick={() => startPaginate(page - 1)}
          >
            ← Previous
          </button>

          <span className="text-sm text-gray-500">
            Page {page} of {totalPages}
          </span>

          <button
            type="button"
            className="text-blue-500 disabled:text-gray-400"
            disabled={page === totalPages || isPending}
            onClick={() => startPaginate(page + 1)}
          >
            Next →
          </button>
        </div>
      )}
    </form>
  );
}
