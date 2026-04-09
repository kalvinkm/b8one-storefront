import './ProductsSection.css';

export function ProductsSection() {
  const mockProducts = Array.from({ length: 6 });

  return (
    <section
      className="products-section"
      id="products"
      aria-labelledby="products-title"
    >
      <h2 className="products-title">Produtos em destaque</h2>

      <div className="products-grid">
        {mockProducts.map((_, index) => (
          <div className="product-card-mock" key={`product-${index}`}>
            <div className="product-image" />
            <h3 className="product-name">Produto Exemplo</h3>
            <p className="product-price">R$ 99,90</p>
            <button type="button" className="product-button">Comprar</button>
          </div>
        ))}
      </div>
    </section>
  );
}
