import { memo, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./Carousel.css";
import { useWindowSize } from "../../hooks/useWindowSize";

interface Experience {
  title: string;
  desc: string;
  image?: string;
  url?: string;
}

interface CarouselProps {
  experiences: Experience[];
  itemsToShow?: number;
  onItemClick?: (experience: Experience, index: number) => void;
}

const Carousel = memo(function Carousel({
  experiences,
  itemsToShow = 3,
  onItemClick,
}: CarouselProps) {
  const { isMobile, isTablet } = useWindowSize();

  // Ajusta o número de items baseado no tamanho da tela
  const responsiveItemsToShow = isMobile ? 1 : isTablet ? 2 : itemsToShow;

  const showArrows = experiences.length > responsiveItemsToShow;
  const isSingleItem = experiences.length === 1;

  // Configure EmblaCarousel with autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      skipSnaps: false,
    },
    [Autoplay({ delay: 4500, stopOnInteraction: true })]
  );

  // Handle navigation buttons
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // Track selected index for dots
  const [currentSelectedIndex, setCurrentSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setCurrentSelectedIndex(index);
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="experience-carousel">
      <div className="carousel-container">
        {showArrows && (
          <button
            className="carousel-btn prev"
            onClick={scrollPrev}
            aria-label="Previous"
          >
            ‹
          </button>
        )}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {isSingleItem && <div className="value-card placeholder"></div>}
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="embla__slide"
                style={{
                  flex: `0 0 calc((100% - (var(--gap-size) * (${responsiveItemsToShow} - 1))) / ${responsiveItemsToShow})`,
                }}
              >
                <div
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
              </div>
            ))}
            {isSingleItem && <div className="value-card placeholder"></div>}
          </div>
        </div>
        {showArrows && (
          <button
            className="carousel-btn next"
            onClick={scrollNext}
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
            className={`dot ${currentSelectedIndex === index ? "active" : ""}`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
});

export default Carousel;
