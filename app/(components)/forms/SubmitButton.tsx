import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}