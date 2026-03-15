import { useState, useEffect } from 'react';

/**
 * Custom hook that observes when an element enters the viewport.
 * @param {React.RefObject} ref - Ref attached to the target element
 * @param {Object} [options] - IntersectionObserver options
 * @param {number} [options.threshold=0.15] - Visibility threshold
 * @param {boolean} [options.triggerOnce=true] - Whether to fire only once
 * @returns {boolean} isVisible - Whether the element is in view
 */
function useIntersectionObserver(ref, options = {}) {
  const { threshold = 0.15, triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, threshold, triggerOnce]);

  return isVisible;
}

export default useIntersectionObserver;
