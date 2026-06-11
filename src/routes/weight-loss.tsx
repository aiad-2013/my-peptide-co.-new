import { createFileRoute } from '@tanstack/react-router';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { Footer } from '@/components/Footer';
import { SocialProofNotification } from '@/components/SocialProofNotification';

export const Route = createFileRoute('/weight-loss')({
  head: () => ({
    meta: [
      { title: 'Buy GLP-1 Peptides Australia — Retatrutide, Tirzepatide | My Peptide Co' },
      { name: 'description', content: 'Shop research-grade GLP-1 peptides in Australia. Retatrutide, Tirzepatide, 5-Amino-1MQ and more. Lab-tested, fast dispatch.' },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero activeCategory="glp-1" compact />
        <ProductGrid category="glp-1" />
      </main>
      <Footer />
      <SocialProofNotification />
    </div>
  ),
});
