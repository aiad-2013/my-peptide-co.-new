import { createFileRoute } from '@tanstack/react-router';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { Footer } from '@/components/Footer';
import { SocialProofNotification } from '@/components/SocialProofNotification';

type CategoryFilter = 'all' | 'sarms' | 'peptides' | 'glp-1' | 'erectile-performance' | 'dilutes' | 'pct';

const SEO_MAP: Record<CategoryFilter, { title: string; description: string }> = {
  all: {
    title: 'Buy SARMs & Peptides Online Australia | My Peptide Co',
    description: 'Shop pharmaceutical-grade SARMs and peptides in Australia. RAD-140, MK-677, BPC-157, TB-500 and more. 99%+ purity, third-party tested, fast dispatch.',
  },
  sarms: {
    title: 'Buy SARMs Australia — RAD-140, MK-677, LGD-4033 | My Peptide Co',
    description: 'High-purity SARMs for sale in Australia. Shop RAD-140, MK-677, LGD-4033, SR-9009 and more. Lab-tested, same-day dispatch on orders before 12pm.',
  },
  peptides: {
    title: 'Buy Peptides Australia — BPC-157, TB-500, CJC-1295 | My Peptide Co',
    description: 'Premium research peptides for sale in Australia. BPC-157, TB-500, CJC-1295, Ipamorelin and more. Pharmaceutical-grade purity, lab-verified, fast shipping.',
  },
  'glp-1': {
    title: 'Buy GLP-1 Peptides Australia — Retatrutide, Tirzepatide | My Peptide Co',
    description: 'Shop research-grade GLP-1 peptides in Australia. Retatrutide, Tirzepatide, 5-Amino-1MQ and more. Lab-tested, fast dispatch.',
  },
  'erectile-performance': {
    title: 'Buy Erectile Performance Peptides Australia — PT-141, Melanotan II | My Peptide Co',
    description: 'Research-grade sexual health peptides in Australia. PT-141, Melanotan II, BPC-157 and more. Lab-tested, same-day dispatch.',
  },
  dilutes: {
    title: 'Buy Bacteriostatic Water Australia — BAC Water | My Peptide Co',
    description: 'Research-grade bacteriostatic water for reconstituting peptides in Australia. Lab-tested, same-day dispatch.',
  },
  pct: {
    title: 'Buy PCT (Post Cycle Therapy) Australia — Clomid, Nolvadex | My Peptide Co',
    description: 'Research-grade post-cycle therapy (PCT) compounds in Australia. Clomiphene (Clomid), Tamoxifen (Nolvadex). Lab-tested, same-day dispatch.',
  },
};

export const Route = createFileRoute('/products')({
  head: () => {
    const seo = SEO_MAP['all'];
    return {
      meta: [
        { title: seo.title },
        { name: 'description', content: seo.description },
        { property: 'og:title', content: seo.title },
        { property: 'og:description', content: seo.description },
      ],
    };
  },
  component: Products,
});

function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero activeCategory="all" compact />
        <ProductGrid category="all" />
      </main>
      <Footer />
      <SocialProofNotification />
    </div>
  );
}
