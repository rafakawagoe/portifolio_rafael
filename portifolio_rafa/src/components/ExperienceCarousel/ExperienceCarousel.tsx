import { memo, useState, useEffect } from "react";
import "./ExperienceCarousel.css";
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

  const showArrows = experiences.length > responsiveItemsToShow;
  const isSingleItem = experiences.length === 1;

  // Estado para carrossel infinito
  const [currentIndex, setCurrentIndex] = useState(responsiveItemsToShow);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Cria array estendido com clones para loop infinito
  const extendedExperiences = [
    ...experiences.slice(-responsiveItemsToShow),
    ...experiences,
    ...experiences.slice(0, responsiveItemsToShow),
  ];

  const handleNext = () => {
    if (isTransitioning) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (isTransitioning) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleGoTo = (index: number) => {
    setCurrentIndex(index + responsiveItemsToShow);
  };

  useEffect(() => {
    if (currentIndex === responsiveItemsToShow + experiences.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(responsiveItemsToShow);
      }, 500);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 550);
    } else if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(responsiveItemsToShow + experiences.length - 1);
      }, 500);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 550);
    }
  }, [currentIndex, experiences.length, responsiveItemsToShow]);

  useEffect(() => {
    setCurrentIndex(responsiveItemsToShow);
  }, [responsiveItemsToShow]);

  useEffect(() => {
    if (isHovered || isSingleItem) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isHovered, isSingleItem, currentIndex, isTransitioning]);

  return (
    <div
      className="experience-carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-container">
        {showArrows && (
          <button
            className="carousel-btn prev"
            onClick={handlePrev}
            aria-label="Previous"
          >
            ‹
          </button>
        )}
        <div className="carousel-content">
          <div
            className={`values-grid ${isSingleItem ? "single-item" : ""}`}
            style={{
              transform: `translateX(calc(-${currentIndex} * (100% / var(--items-to-show)) - ${currentIndex} * var(--gap-size)))`,
              transition: isTransitioning
                ? "transform 0.5s ease-in-out"
                : "none",
            }}
          >
            {isSingleItem && <div className="value-card placeholder"></div>}
            {extendedExperiences.map((exp, index) => (
              <div
                key={index}
                className={`value-card ${exp.url || onItemClick ? "clickable" : ""}`}
                onClick={() => {
                  if (onItemClick) {
                    onItemClick(exp, index);
                  } else if (exp.url) {
                    window.open(exp.url, "_blank", "noopener,noreferrer");
                  }
                }}
                role={exp.url || onItemClick ? "button" : undefined}
                tabIndex={exp.url || onItemClick ? 0 : undefined}
                onKeyDown={(e) => {
                  if (
                    (e.key === "Enter" || e.key === " ") &&
                    (exp.url || onItemClick)
                  ) {
                    e.preventDefault();
                    if (onItemClick) {
                      onItemClick(exp, index);
                    } else if (exp.url) {
                      window.open(exp.url, "_blank", "noopener,noreferrer");
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
            onClick={handleNext}
            aria-label="Next"
          >
            ›
          </button>
        )}
      </div>
      <div className="carousel-dots">
        {experiences.map((_, index) => {
          const activeIndex =
            (((currentIndex - responsiveItemsToShow) % experiences.length) +
              experiences.length) %
            experiences.length;
          return (
            <button
              key={index}
              className={`dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleGoTo(index)}
              aria-label={`Go to item ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
});

export default ExperienceCarousel;
