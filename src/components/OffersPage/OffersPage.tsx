import { Banner } from '../Banner/Banner';
import { ProductCarouselSection } from '../ProductCarouselSection/ProductCarouselSection';
import { ProductsSection } from '../ProductsSection/ProductsSection';
import './OffersPage.css';

export function OffersPage() {
  return (
    <main className="page" aria-label="Página de ofertas">
      <div className="container">
        <Banner />
        <ProductsSection />
        <ProductCarouselSection />
      </div>
    </main>
  );
}
