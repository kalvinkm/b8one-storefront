import './Banner.css';

export function Banner() {
  function handleScroll() {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="banner">
      <div className="banner-content" role="contentinfo">
        <span className="badge">🔥 Até 50% OFF</span>

        <h1 className="banner-title">Ofertas da Semana</h1>

        <p className="banner-text">
          Descontos imperdíveis em moda, eletrônicos e acessórios
        </p>

        <button
          className="banner-button"
          aria-label="Ver produtos em oferta"
          onClick={handleScroll}
        >
          Ver produtos
        </button>
      </div>
    </section>
  );
}
