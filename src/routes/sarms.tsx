import { createFileRoute } from '@tanstack/react-router';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { Footer } from '@/components/Footer';
import { SocialProofNotification } from '@/components/SocialProofNotification';

export const Route = createFileRoute('/sarms')({
  head: () => ({
    meta: [
      { title: 'Buy SARMs Australia — RAD-140, MK-677, LGD-4033 | My Peptide Co' },
      { name: 'description', content: 'High-purity SARMs for sale in Australia. Shop RAD-140, MK-677, LGD-4033, SR-9009 and more. Lab-tested, same-day dispatch on orders before 12pm.' },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero activeCategory="sarms" compact />
        <ProductGrid category="sarms" />
      </main>
      <Footer />
      <SocialProofNotification />
    </div>
  ),
});
