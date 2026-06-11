import { createFileRoute } from '@tanstack/react-router';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { Footer } from '@/components/Footer';
import { SocialProofNotification } from '@/components/SocialProofNotification';

export const Route = createFileRoute('/peptides')({
  head: () => ({
    meta: [
      { title: 'Buy Peptides Australia — BPC-157, TB-500, CJC-1295 | My Peptide Co' },
      { name: 'description', content: 'Premium research peptides for sale in Australia. BPC-157, TB-500, CJC-1295, Ipamorelin and more. Pharmaceutical-grade purity, lab-verified, fast shipping.' },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero activeCategory="peptides" compact />
        <ProductGrid category="peptides" />
      </main>
      <Footer />
      <SocialProofNotification />
    </div>
  ),
});
