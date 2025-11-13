import { useState } from 'react';

interface UseCarouselProps {
  totalItems: number;
  itemsToShow: number;
}

export const useCarousel = ({ totalItems, itemsToShow }: UseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = totalItems - itemsToShow;

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goTo = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return {
    currentIndex,
    next,
    prev,
    goTo,
    canGoPrev,
    canGoNext,
  };
};
