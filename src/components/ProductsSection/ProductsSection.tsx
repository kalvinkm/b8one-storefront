import { useEffect, useState } from 'react';
import productsData from '../../data/productsData.json';
import { ProductCard } from '../ProductCard/ProductCard';
import type { Product, ApiProduct } from '../../types/product.types';
import './ProductsSection.css';

export function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((data: ApiProduct[]) => {
        const filtered = data.filter((item) => item.category?.id === 80);

        const formatted = filtered.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          images: item.images,
        }));

        const randomProducts = formatted
          .sort(() => Math.random() - 0.5)
          .slice(0, 6);

        if (randomProducts.length === 6) {
          setProducts(randomProducts);
        } else {
          console.warn('Insufficient products, using fallback');
          setProducts(productsData);
        }
      })
      .catch((error) => {
        console.error('Error retrieving products from the API :', error);
        setProducts(productsData);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div className="product-card-skeleton" key={index} />
            ))
          : products.map((product, index) => (
              <ProductCard key={`${product.id}-${index}`} product={product} />
            ))}
      </div>
    </section>
  );
}
