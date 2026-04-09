import productData from '../../data/productsData.json';
import './ProductsSection.css';

export function ProductsSection() {

  const products = productData.length
  ? Array(6).fill(productData[0])
  : [];

  return (
    <section
      className="products-section"
      id="products"
      aria-labelledby="products-title"
    >
      <h2 className="products-title">Produtos em destaque</h2>

      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={`${product.id}-${index}`}>
            <img
              src={product.images[0]}
              alt={product.title}
              className="product-image"
            />

            <h3 className="product-name">{product.title}</h3>

            <p className="product-price">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>

            <button type="button" className="product-button">
              Comprar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
