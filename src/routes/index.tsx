import { createFileRoute } from "@tanstack/react-router";
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
          "Pioneering peptide synthesis for advanced research and metabolic optimization. 99.9% purity, third-party verified.",
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

function Index() {
  return (
    <>
      {/* Hero */}
      <header className="relative overflow-hidden px-8 pb-32 pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-20 lg:grid-cols-2">
          <div>
            <span className="mb-8 inline-block rounded-full bg-brand-mint px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-navy">
              Quality Assured  Lab Tested
            </span>
            <h1 className="mb-8 font-serif text-7xl leading-[0.9] text-brand-navy md:text-8xl">
              Precision <br />
              <i className="font-medium">Biotech</i> Solutions.
            </h1>
            <p className="mb-10 max-w-md text-lg leading-relaxed text-brand-slate">
              Pioneering the next generation of peptide synthesis for advanced research and metabolic optimization.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-navy px-8 py-4 text-xs uppercase tracking-widest text-white transition-opacity hover:opacity-90">
                Explore Catalog
              </button>
              <button className="border border-brand-navy/20 px-8 py-4 text-xs uppercase tracking-widest text-brand-navy transition-colors hover:bg-brand-navy/5">
                Our Process
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroGlass}
              alt="Laboratory glass with liquid refraction"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
            />
            <div className="absolute -bottom-10 -left-4 max-w-xs rounded-xl border border-brand-navy/5 bg-white p-8 shadow-xl md:-left-10">
              <div className="mb-2 font-serif text-4xl text-brand-navy">99.9%</div>
              <div className="text-[10px] uppercase tracking-widest text-brand-slate">
                Purity standard verified across all molecular batches.
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About preview */}
      <section className="bg-stone-50 py-32">
        <div className="mx-auto max-w-6xl px-8">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="mb-6 text-[11px] uppercase tracking-[0.3em] text-brand-slate">
                About the Company
              </h2>
              <h3 className="mb-8 font-serif text-5xl leading-tight text-brand-navy">
                We believe in the power of{" "}
                <span className="italic text-brand-slate">molecular</span> integrity.
              </h3>
            </div>
            <div className="flex flex-col justify-end lg:col-span-7">
              <div className="space-y-8 text-lg leading-relaxed text-brand-navy/80">
                <p>
                  Founded by a collective of chemists and longevity enthusiasts, My Peptide Co. was established to bridge the gap between clinical research and consumer accessibility. Our facility operates at the intersection of rigorous science and uncompromising quality control.
                </p>
                <p>
                  Every formulation is synthesized in a sterile environment and subjected to third-party verification, ensuring that what you receive is exactly what nature intended, refined by technology.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-2 gap-8 border-t border-brand-navy/10 pt-12">
                <div>
                  <div className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-navy">
                    Ethically Sourced
                  </div>
                  <div className="text-sm text-brand-slate">
                    Materials sourced from sustainable, high-compliance laboratories globally.
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-navy">
                    Open Data
                  </div>
                  <div className="text-sm text-brand-slate">
                    Access complete COA reports for every single batch in our inventory.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="px-8 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 flex items-end justify-between">
            <h4 className="font-serif text-5xl text-brand-navy">Core Research</h4>
            <a
              href="#"
              className="border-b border-brand-navy pb-1 text-[10px] uppercase tracking-widest text-brand-navy"
            >
              View All Categories
            </a>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                img: productVial,
                name: "Metabolic Chain",
                price: "$89.00",
                tag: "Synthesized Optimizer",
              },
              {
                img: productDropper,
                name: "Cognitive Catalyst",
                price: "$124.00",
                tag: "Neurological Support",
              },
              {
                img: productMolecule,
                name: "Cellular Repair",
                price: "$110.00",
                tag: "Recovery Complex",
              },
            ].map((p) => (
              <a key={p.name} href="#" className="group block cursor-pointer">
                <div className="mb-6 aspect-[3/4] w-full overflow-hidden rounded-sm bg-stone-100 outline-1 -outline-offset-1 outline-black/5 transition-colors group-hover:bg-brand-mint">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={800}
                    height={1024}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-brand-navy">{p.name}</span>
                  <span className="text-brand-slate">{p.price}</span>
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-brand-slate">
                  {p.tag}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
