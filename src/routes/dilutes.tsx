import { createFileRoute } from '@tanstack/react-router';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { Footer } from '@/components/Footer';
import { SocialProofNotification } from '@/components/SocialProofNotification';

export const Route = createFileRoute('/dilutes')({
  head: () => ({
    meta: [
      { title: 'Buy Bacteriostatic Water Australia — BAC Water | My Peptide Co' },
      { name: 'description', content: 'Research-grade bacteriostatic water for reconstituting peptides in Australia. Lab-tested, same-day dispatch.' },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero activeCategory="dilutes" compact />
        <ProductGrid category="dilutes" />
      </main>
      <Footer />
      <SocialProofNotification />
    </div>
  ),
});
