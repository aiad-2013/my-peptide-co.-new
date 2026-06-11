import { createFileRoute } from '@tanstack/react-router';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { Footer } from '@/components/Footer';
import { SocialProofNotification } from '@/components/SocialProofNotification';

export const Route = createFileRoute('/pct')({
  head: () => ({
    meta: [
      { title: 'Buy PCT (Post Cycle Therapy) Australia — Clomid, Nolvadex | My Peptide Co' },
      { name: 'description', content: 'Research-grade post-cycle therapy (PCT) compounds in Australia. Clomiphene (Clomid), Tamoxifen (Nolvadex). Lab-tested, same-day dispatch.' },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero activeCategory="pct" compact />
        <ProductGrid category="pct" />
      </main>
      <Footer />
      <SocialProofNotification />
    </div>
  ),
});
