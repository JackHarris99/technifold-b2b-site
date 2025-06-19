import ToolPageLayout from "@/components/ToolPageLayout";

export default function Page() {
  return (
    <ToolPageLayout
      machine="Muller Martini Trend Binder"
      tool="quadcreaser"
      formattedTool="Quad-Creaser"
    >
      <ul className="list-disc ml-6 space-y-2 text-gray-700">
        <li>Stops fibre cracking, even on digital or laminated stock</li>
        <li>Delivers clean, professional folds and scores</li>
        <li>Installs in minutes — no special skills required</li>
      </ul>

      <div className="mt-10">
        <p className="text-center text-sm text-gray-500 italic">
          Let us prove what your Muller Martini Trend Binder can really do.
        </p>
      </div>
    </ToolPageLayout>
  );
}
