import Image from "next/image";
import { ReactNode } from "react";

export default function ToolPageLayout({
  children,
  machine,
  tool,
  formattedTool,
}: {
  children: ReactNode;
  machine: string;
  tool: string;
  formattedTool: string;
}) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        {formattedTool} for {machine}
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        It&rsquo;s not your folder&rsquo;s fault &mdash; it&rsquo;s the setup. Technifold upgrades retrofit your finishing machine in minutes, eliminate fibre cracking, and save hours per week in setup time.
      </p>

      {/* Tool-Specific Proof Image with Fallback */}
      <div className="flex justify-center mb-10">
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

      {children}
    </section>
  );
}
