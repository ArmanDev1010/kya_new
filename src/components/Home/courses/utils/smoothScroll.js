import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const scrollAnimations = () => {
  const contentElements = [...document.querySelectorAll('.course')];
  const totalContentElements = contentElements.length;

  contentElements.forEach((el, position) => {
    const isLast = position === totalContentElements - 1;

    gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top top',
        end: '+=100%',
        scrub: true,
      },
    }).to(el, {
      ease: 'none',
      startAt: { filter: 'brightness(100%)' },
      filter: isLast ? 'none' : 'brightness(50%)',
      scale: 0.95,
      borderRadius: 40,
    }, 0);
  });
};