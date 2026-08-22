import { useEffect } from 'react';

const STEP_DELAY = 45;
const MAX_STEPS = 6;

export const useRise = () => {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('.rise')
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );

    elements.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index, MAX_STEPS) * STEP_DELAY}ms`;
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
};
