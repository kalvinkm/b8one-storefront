import './ProductCard.css';
import type { Product } from '../../types/product.types'

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <img
        src={product.images?.[0] ?? 'https://placehold.co/300x200'}
        alt={`Imagem do produto ${product.title}`}
        className="product-image"
      />

      <h3 className="product-name">{product.title}</h3>

      <p className="product-price">
        {product.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </p>

      <button
        type="button"
        className="product-button"
        aria-label={`Comprar ${product.title}`}
      >
        Comprar
      </button>
    </div>
  );
}
