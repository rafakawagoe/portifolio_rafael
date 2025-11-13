import { memo } from "react";
import "./ExperienceCarousel.css";
import { useCarousel } from "../../hooks/useCarousel";

interface Experience {
  title: string;
  desc: string;
  image?: string;
}

interface ExperienceCarouselProps {
  experiences: Experience[];
  itemsToShow?: number;
}

const ExperienceCarousel = memo(function ExperienceCarousel({
  experiences,
  itemsToShow = 3,
}: ExperienceCarouselProps) {
  const { currentIndex, next, prev, goTo, canGoPrev, canGoNext } = useCarousel({
    totalItems: experiences.length,
    itemsToShow,
  });

  const showArrows = experiences.length > itemsToShow;
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
              transform: `translateX(calc(-${currentIndex} * (100% / ${itemsToShow} + 10px)))`,
            }}
          >
            {isSingleItem && <div className="value-card placeholder"></div>}
            {experiences.map((exp, index) => (
              <div key={index} className="value-card">
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
              index >= currentIndex && index < currentIndex + itemsToShow
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
