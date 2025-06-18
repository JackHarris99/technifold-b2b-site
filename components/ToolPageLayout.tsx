import Image from "next/image";
import LeadCaptureForm from "./LeadCaptureForm";

export default function ToolPageLayout({
  manufacturer,
  tool,
}: {
  manufacturer: string;
  tool: string;
}) {
  const formattedMachine = manufacturer.charAt(0).toUpperCase() + manufacturer.slice(1).replace(/-/g, ' ');
  const formattedTool = tool.replace(/-/g, ' ');
  const headline = `Your ${formattedMachine} isn’t the problem — your setup is.`;

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Headline and Summary */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{headline}</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          The <strong>{formattedTool}</strong> is a proven upgrade for the <strong>{formattedMachine}</strong>. If you're dealing with cracking,
          misalignment, or wasted setup time — Technifold tools transform your finishing output immediately.
        </p>
      </div>

      {/* Form + Benefits */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="border rounded-xl shadow-md p-6">
          <h2 className="font-semibold mb-2">Download Setup Guide</h2>
          <LeadCaptureForm />
        </div>
        <div className="border rounded-xl shadow-md p-6">
          <h2 className="font-semibold mb-2">Key Benefits</h2>
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li>Install in minutes — no shaft removal required</li>
            <li>Eliminate fibre cracking on coated and laminated stocks</li>
            <li>Proven results across 85–350gsm digital, offset, and recycled stock</li>
          </ul>
        </div>
      </div>

      {/* Tool-Specific Proof Image with Fallback */}
      <div className="flex justify-center">
        <Image
          src={`/tool-proof/${tool}.png`}
          alt={`${formattedTool} visual proof`}
          width={800}
          height={400}
          className="rounded-xl shadow-xl border"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/tool-proof/default.png";
          }}
        />
      </div>
    </section>
  );
}
