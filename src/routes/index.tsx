import { createFileRoute, Link } from "@tanstack/react-router";
import heroGlass from "@/assets/hero-glass.jpg";
import productVial from "@/assets/product-vial.jpg";
import productDropper from "@/assets/product-dropper.jpg";
import productMolecule from "@/assets/product-molecule.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Peptide Co. - Precision Biotech Solutions" },
      {
        name: "description",
        content:
          "Pioneering peptide synthesis for advanced research and metabolic optimization. Lab-tested, third-party verified.",
      },
      { property: "og:title", content: "My Peptide Co. - Precision Biotech Solutions" },
      {
        property: "og:description",
        content:
          "Pioneering peptide synthesis for advanced research and metabolic optimization.",
      },
      { property: "og:image", content: heroGlass },
      { name: "twitter:image", content: heroGlass },
    ],
  }),
  component: Index,
});

const principles = [
  {
    title: "Molecular Integrity",
    body: "Every batch is synthesized in controlled conditions and verified before release.",
  },
  {
    title: "Third-Party Verified",
    body: "Independent laboratories confirm purity, potency, and identity on every lot.",
  },
  {
    title: "Research First",
    body: "Built for scientists, by chemists who understand the demands of rigorous study.",
  },
];

const catalog = [
  {
    name: "Semaglutide",
    tag: "Metabolic",
    price: "$189",
    image: productVial,
  },
  {
    name: "BPC-157",
    tag: "Regenerative",
    price: "$129",
    image: productDropper,
  },
  {
    name: "Tesamorelin",
    tag: "Growth Factor",
    price: "$219",
    image: productMolecule,
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="grid gap-16 px-8 pb-24 pt-20 md:grid-cols-2 md:items-center md:gap-20 md:px-16">
        <div>
          <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-brand-slate">
            Est. 2024 - Precision Biotech
          </p>
          <h1 className="font-serif text-5xl font-light leading-[1.05] tracking-tight text-brand-navy md:text-7xl">
            A laboratory built on{" "}
            <span className="italic text-brand-slate">molecular integrity.</span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-brand-slate">
            We synthesize research-grade peptides under controlled conditions, with
            independent verification on every batch. No shortcuts, no compromises.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              to="/about"
              className="rounded-full bg-brand-navy px-6 py-3 text-[11px] uppercase tracking-widest text-white transition-opacity hover:opacity-90"
            >
              Our Standard
            </Link>
            <a
              href="#catalog"
              className="text-[11px] uppercase tracking-widest text-brand-navy underline-offset-4 hover:underline"
            >
              View Catalog
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-4 -top-4 rounded-full bg-brand-mint px-4 py-2 text-[10px] uppercase tracking-widest text-brand-navy">
            99.4% Purity
          </div>
          <img
            src={heroGlass}
            alt="Laboratory glassware containing peptide solution"
            className="aspect-[4/5] w-full rounded-sm object-cover"
          />
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-brand-navy/5 bg-stone-50 px-8 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-brand-slate">
            The Standard
          </p>
          <h2 className="mb-16 max-w-2xl font-serif text-3xl font-light leading-tight text-brand-navy md:text-5xl">
            Pharmaceutical-grade compounds, every batch.
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="border-t border-brand-navy/10 pt-6">
                <h3 className="mb-3 font-serif text-2xl text-brand-navy">{p.title}</h3>
                <p className="text-sm leading-relaxed text-brand-slate">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="px-8 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-brand-slate">
                Catalog
              </p>
              <h2 className="font-serif text-3xl font-light text-brand-navy md:text-5xl">
                Selected compounds.
              </h2>
            </div>
            <Link
              to="/about"
              className="text-[11px] uppercase tracking-widest text-brand-navy underline-offset-4 hover:underline"
            >
              View all research
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {catalog.map((item) => (
              <article key={item.name} className="group">
                <div className="mb-5 overflow-hidden rounded-sm bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-baseline justify-between">
                  <div>
                    <p className="mb-1 text-[10px] uppercase tracking-widest text-brand-slate">
                      {item.tag}
                    </p>
                    <h3 className="font-serif text-2xl text-brand-navy">{item.name}</h3>
                  </div>
                  <span className="font-serif text-xl text-brand-navy">{item.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
