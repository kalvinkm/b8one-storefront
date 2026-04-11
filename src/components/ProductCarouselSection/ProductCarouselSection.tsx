import { useEffect, useRef, useState } from 'react';
import productsData from '../../data/productsData.json';
import { ProductCard } from '../ProductCard/ProductCard';
import type { Product } from '../../types/product.types';
import { ArrowIcon } from '../Icons/ArrowIcon';
import './ProductCarouselSection.css';

export function ProductCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [itemWidth, setItemWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const products = productsData as Product[];

  const totalDots = products.length - itemsPerView + 1;

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = products.length - itemsPerView;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const maxIndex = products.length - itemsPerView;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;

      setItemsPerView(isMobile ? 1 : 4);

      if (trackRef.current) {
        setItemWidth(trackRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="carousel-section" aria-labelledby="carousel-title">
      <div className="carousel-header">
        <h2 id="carousel-title" className="carousel-title">
          Mais produtos
        </h2>

        <p className="carousel-subtitle">
          Confira outras opções selecionadas para você
        </p>
      </div>

      <div className="carousel-content">
        <div className="carousel">
          <div ref={trackRef} className="carousel-track">
            <div
              className="carousel-inner"
              style={{
                transform:
                  itemsPerView === 1 && itemWidth > 0
                    ? `translateX(-${currentIndex * itemWidth}px)`
                    : `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        <div className="carousel-arrows-section">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={handlePrev}
          >
            <ArrowIcon direction="left" />
          </button>

          <div className="carousel-dots">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                className={index === currentIndex ? 'active' : ''}
                onClick={() => {
                  const maxIndex = products.length - itemsPerView;
                  setCurrentIndex(index > maxIndex ? maxIndex : index);
                }}
              />
            ))}
          </div>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={handleNext}
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
