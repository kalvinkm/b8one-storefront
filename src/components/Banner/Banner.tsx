import './Banner.css';

function handleScroll() {
  const section = document.getElementById('products');

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

export function Banner() {
  return (
    <section className="banner" aria-labelledby="banner-title">
      <div className="banner-content">
        <span id="banner-title" className="badge">🔥 Até 50% OFF</span>

        <h1 className="banner-title">Ofertas da Semana</h1>

        <p className="banner-text">
          Descontos imperdíveis em moda, eletrônicos e acessórios
        </p>

        <button
          className="banner-button"
          type="button"
          aria-label="Ver produtos em oferta"
          onClick={handleScroll}
        >
          Ver produtos
        </button>
      </div>
    </section>
  );
}
