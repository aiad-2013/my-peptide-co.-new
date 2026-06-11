import { createFileRoute } from '@tanstack/react-router';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { Footer } from '@/components/Footer';
import { SocialProofNotification } from '@/components/SocialProofNotification';

export const Route = createFileRoute('/erectile-performance')({
  head: () => ({
    meta: [
      { title: 'Buy Erectile Performance Peptides Australia — PT-141, Melanotan II | My Peptide Co' },
      { name: 'description', content: 'Research-grade sexual health peptides in Australia. PT-141, Melanotan II, BPC-157 and more. Lab-tested, same-day dispatch.' },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero activeCategory="erectile-performance" compact />
        <ProductGrid category="erectile-performance" />
      </main>
      <Footer />
      <SocialProofNotification />
    </div>
  ),
});
