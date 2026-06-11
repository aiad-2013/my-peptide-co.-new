import { createFileRoute } from "@tanstack/react-router";
import aboutLab from "@/assets/about-lab.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - My Peptide Co." },
      {
        name: "description",
        content:
          "Founded by chemists and longevity researchers, My Peptide Co. bridges rigorous science with uncompromising quality control.",
      },
      { property: "og:title", content: "About - My Peptide Co." },
      {
        property: "og:description",
        content:
          "Inside the laboratory bridging clinical research and consumer accessibility.",
      },
      { property: "og:image", content: aboutLab },
      { name: "twitter:image", content: aboutLab },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      {/* Intro */}
      <header className="px-8 pb-24 pt-24">
        <div className="mx-auto max-w-6xl">
          <span className="mb-8 inline-block text-[11px] uppercase tracking-[0.3em] text-brand-slate">
            About My Peptide Co.
          </span>
          <h1 className="max-w-4xl font-serif text-6xl leading-[0.95] text-brand-navy md:text-7xl">
            A laboratory <i className="font-medium">built for</i> molecular integrity.
          </h1>
        </div>
      </header>

      {/* Image */}
      <section className="px-8">
        <div className="mx-auto max-w-6xl">
          <img
            src={aboutLab}
            alt="Inside the My Peptide Co. laboratory"
            loading="lazy"
            width={1440}
            height={1024}
            className="aspect-[3/2] w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
          />
        </div>
      </section>

      {/* Story */}
      <section className="px-8 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="mb-6 text-[11px] uppercase tracking-[0.3em] text-brand-slate">
                Our Story
              </h2>
              <h3 className="font-serif text-5xl leading-tight text-brand-navy">
                Science, refined to <span className="italic text-brand-slate">first principles</span>.
              </h3>
            </div>
            <div className="space-y-8 text-lg leading-relaxed text-brand-navy/80 lg:col-span-7">
              <p>
                My Peptide Co. was founded by a small collective of biochemists who shared a single frustration: that the consumer-facing peptide market was full of inconsistency, hand-waving, and opacity. We set out to build the antidote.
              </p>
              <p>
                Our laboratory operates like a finely calibrated instrument. Every sequence is synthesized in-house, validated by independent third parties, and accompanied by a complete certificate of analysis. Nothing leaves our facility without a paper trail.
              </p>
              <p>
                We exist for the researcher, the practitioner, and the longevity-minded individual who refuses to compromise on what enters their work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-stone-50 px-8 py-32">
        <div className="mx-auto max-w-6xl">
          <h4 className="mb-16 font-serif text-5xl text-brand-navy">Principles</h4>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                title: "Purity First",
                body: "Every batch held to a 99.9% purity standard, verified by HPLC and mass spectrometry.",
              },
              {
                title: "Independent Verification",
                body: "Third-party laboratory testing on every production lot, with results published openly.",
              },
              {
                title: "Cold-Chain Integrity",
                body: "Lyophilized and shipped under controlled conditions to preserve molecular stability.",
              },
              {
                title: "Ethically Sourced",
                body: "Raw materials sourced from sustainable, high-compliance laboratories worldwide.",
              },
              {
                title: "Open Documentation",
                body: "Complete certificates of analysis available for every inventory item we stock.",
              },
              {
                title: "Research First",
                body: "All products are intended for research use, supplied to qualified professionals.",
              },
            ].map((p) => (
              <div key={p.title} className="border-t border-brand-navy/10 pt-8">
                <div className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-navy">
                  {p.title}
                </div>
                <p className="text-sm leading-relaxed text-brand-slate">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h5 className="mb-8 font-serif text-5xl leading-tight text-brand-navy">
            Curious about a specific compound?
          </h5>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-brand-slate">
            Get in touch with our research team for custom synthesis inquiries, bulk orders, or technical documentation.
          </p>
          <button className="bg-brand-navy px-8 py-4 text-xs uppercase tracking-widest text-white transition-opacity hover:opacity-90">
            Contact the Lab
          </button>
        </div>
      </section>
    </>
  );
}