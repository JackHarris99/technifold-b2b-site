import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          End Cracking, Downtime & Finishing Waste — Instantly
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Technifold tools retrofit your folding machine in minutes — no shaft removal, no setup loss. Used by 93% of the world’s top finishers.
        </p>
        <Link
          href="/solutions"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-3 rounded-xl shadow transition"
        >
          Find My Tool
        </Link>
      </section>

      {/* Benefits Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-sm">
        {[
          ["✅", "Eliminates fibre cracking — 100% proven"],
          ["⚙️", "Compatible with 700+ machines worldwide"],
          ["⏱️", "Installs in minutes — no shaft removal"],
          ["🌍", "Used globally by high-volume finishers"],
        ].map(([icon, text], i) => (
          <div key={i} className="p-4 border rounded-lg shadow-sm text-center">
            <div className="text-2xl mb-2">{icon}</div>
            <p>{text}</p>
          </div>
        ))}
      </section>

      {/* Machine/Tool Search Prompt */}
      <section className="text-center mb-20">
        <h2 className="text-2xl font-semibold mb-4">Find the Right Tool for Your Machine</h2>
        <p className="text-sm text-gray-600 mb-6">
          Browse over 700+ combinations of folding machines and Technifold upgrades.
        </p>
        <Link
          href="/solutions"
          className="inline-block border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-5 py-2 rounded-xl transition"
        >
          View All Solutions
        </Link>
      </section>

      {/* Trust Section */}
      <section className="text-center text-sm text-gray-500 mb-16">
        <p>
          Trusted by finishing teams using Heidelberg, Horizon, Stahlfolder, Morgana, and more.
        </p>
      </section>

      {/* CTA Footer */}
      <section className="bg-gray-100 p-6 rounded-xl text-center">
        <h3 className="text-lg font-semibold mb-2">Not sure what fits your machine?</h3>
        <p className="text-sm text-gray-600 mb-4">
          Contact us for tool matching or to book a technical demo.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl shadow"
        >
          Contact Technifold
        </Link>
      </section>
    </main>
  );
}
