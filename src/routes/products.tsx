import { createFileRoute } from '@tanstack/react-router';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { Footer } from '@/components/Footer';
import { SocialProofNotification } from '@/components/SocialProofNotification';

export const Route = createFileRoute('/products')({
  head: () => ({
    meta: [
      { title: 'Buy SARMs & Peptides Online Australia | My Peptide Co' },
      { name: 'description', content: 'Shop pharmaceutical-grade SARMs and peptides in Australia. RAD-140, MK-677, BPC-157, TB-500 and more. 99%+ purity, third-party tested, fast dispatch.' },
    ],
  }),
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
