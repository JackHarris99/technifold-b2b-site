import { useState } from "react";

export default function LeadCaptureForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace this with Zoho Webhook POST
    console.log("Captured email:", email);
    setSubmitted(true);
  };

  if (submitted) return <p className="text-green-600">Thank you! Guide is on its way.</p>;

  return (
    <form
      onSubmit={handleSubmit}
      className="border p-4 rounded-xl flex flex-col gap-2 shadow-md"
    >
      <label htmlFor="email">Download Setup Guide</label>
      <input
        id="email"
        type="email"
        required
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded px-2 py-1"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-1 hover:bg-blue-700"
      >
        Send My Guide
      </button>
    </form>
  );
}