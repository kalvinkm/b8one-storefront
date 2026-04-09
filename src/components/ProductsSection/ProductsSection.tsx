import productsData from '../../data/productsData.json';
import { ProductCard } from '../ProductCard/ProductCard';
import type { Product } from '../../types/product.types';
import './ProductsSection.css';

export function ProductsSection() {
  const products: Product[] = productsData.length
    ? Array.from({ length: 6 }, () => productsData[0])
    : [];

  return (
    <section
      className="products-section"
      id="products"
      aria-labelledby="products-title"
    >
      <h2 id="products-title" className="products-title">
        Produtos em destaque
      </h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard key={`${product.id}-${index}`} product={product} />
        ))}
      </div>
    </section>
  );
}
