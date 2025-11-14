import { memo } from "react";
import "./ExperienceCarousel.css";
import { useCarousel } from "../../hooks/useCarousel";
import { useWindowSize } from "../../hooks/useWindowSize";

interface Experience {
  title: string;
  desc: string;
  image?: string;
  url?: string;
}

interface ExperienceCarouselProps {
  experiences: Experience[];
  itemsToShow?: number;
  onItemClick?: (experience: Experience, index: number) => void;
}

const ExperienceCarousel = memo(function ExperienceCarousel({
  experiences,
  itemsToShow = 3,
  onItemClick,
}: ExperienceCarouselProps) {
  const { isMobile, isTablet } = useWindowSize();
  
  // Ajusta o número de items baseado no tamanho da tela
  const responsiveItemsToShow = isMobile ? 1 : isTablet ? 2 : itemsToShow;
  
  const { currentIndex, next, prev, goTo, canGoPrev, canGoNext } = useCarousel({
    totalItems: experiences.length,
    itemsToShow: responsiveItemsToShow,
  });

  const showArrows = experiences.length > responsiveItemsToShow;
  const isSingleItem = experiences.length === 1;

  return (
    <div className="experience-carousel">
      <div className="carousel-container">
        {showArrows && (
          <button
            className="carousel-btn prev"
            onClick={prev}
            disabled={!canGoPrev}
            aria-label="Previous"
          >
            ‹
          </button>
        )}
        <div className="carousel-content">
          <div
            className={`values-grid ${isSingleItem ? "single-item" : ""}`}
            style={{
              transform: `translateX(calc(-${currentIndex} * (100% / ${responsiveItemsToShow} + ${isMobile ? '20px' : '30px'})))`,
            }}
          >
            {isSingleItem && <div className="value-card placeholder"></div>}
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`value-card ${exp.url || onItemClick ? 'clickable' : ''}`}
                onClick={() => {
                  if (onItemClick) {
                    onItemClick(exp, index);
                  } else if (exp.url) {
                    window.open(exp.url, '_blank', 'noopener,noreferrer');
                  }
                }}
                role={exp.url || onItemClick ? 'button' : undefined}
                tabIndex={exp.url || onItemClick ? 0 : undefined}
                onKeyDown={(e) => {
                  if ((e.key === 'Enter' || e.key === ' ') && (exp.url || onItemClick)) {
                    e.preventDefault();
                    if (onItemClick) {
                      onItemClick(exp, index);
                    } else if (exp.url) {
                      window.open(exp.url, '_blank', 'noopener,noreferrer');
                    }
                  }
                }}
              >
                <div className="value-icon">
                  {exp.image && (
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="experience-logo"
                    />
                  )}
                </div>
                <h3 className="value-title">{exp.title}</h3>
                <p className="value-description">{exp.desc}</p>
              </div>
            ))}
            {isSingleItem && <div className="value-card placeholder"></div>}
          </div>
        </div>
        {showArrows && (
          <button
            className="carousel-btn next"
            onClick={next}
            disabled={!canGoNext}
            aria-label="Next"
          >
            ›
          </button>
        )}
      </div>
      <div className="carousel-dots">
        {experiences.map((_, index) => (
          <button
            key={index}
            className={`dot ${
              index >= currentIndex && index < currentIndex + responsiveItemsToShow
                ? "active"
                : ""
            }`}
            onClick={() => goTo(index)}
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
});

export default ExperienceCarousel;
