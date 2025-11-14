import { useState } from 'react';

export const useCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const goTo = (index: number) => {
    setCurrentIndex(index);
  };

  const canGoPrev = true;
  const canGoNext = true;

  return {
    currentIndex,
    next,
    prev,
    goTo,
    canGoPrev,
    canGoNext,
  };
};
