import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scrollAnimations = () => {
  const stickySection = document.querySelector(".sticky-section");
  const slidesContainer = document.querySelector(".slides");
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");

  if (!stickySection || !slidesContainer || !slider || slides.length === 0) {
    console.warn("Missing required DOM elements");
    return;
  }

  const stickyHeight = window.innerHeight * 5;
  const totalMove = slidesContainer.scrollWidth - slider.clientWidth;
  const slideWidth = slider.offsetWidth;

  let currentVisibleIndex = null;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const currentIndex = Array.from(slides).indexOf(entry.target);
        const titles = Array.from(slides).map((slide) =>
          slide.querySelector(".title h2")
        );

        if (entry.intersectionRatio >= 0.25) {
          currentVisibleIndex = currentIndex;
          titles.forEach((title, index) => {
            gsap.to(title, {
              y: index === currentIndex ? 0 : -200,
              duration: 0.5,
              ease: "power2.out",
              overwrite: true,
            });
          });
        } else if (
          entry.intersectionRatio < 0.25 &&
          currentVisibleIndex === currentIndex
        ) {
          const prevIndex = currentIndex - 1;
          currentVisibleIndex = prevIndex >= 0 ? prevIndex : null;

          titles.forEach((title, index) => {
            gsap.to(title, {
              y: index === prevIndex ? 0 : -200,
              duration: 0.5,
              ease: "power2.out",
              overwrite: true,
            });
          });
        }
      });
    },
    {
      root: slider,
      threshold: [0, 0.25],
    }
  );

  slides.forEach((slide) => observer.observe(slide));

  ScrollTrigger.create({
    trigger: stickySection,
    start: "top top",
    end: `+=${stickyHeight}em`,
    scrub: 1,
    pin: true,
    pinSpacing: true,
    onUpdate: (self) => {
      const progress = self.progress;
      const mainMove = progress * totalMove;

      gsap.set(slidesContainer, {
        x: -mainMove,
      });

      const currentSlide = Math.floor(mainMove / slideWidth);
      const sliderProgress = (mainMove % slideWidth) / slideWidth;

      slides.forEach((slide, index) => {
        const image = slide.querySelector(".slide_img");
        if (image) {
          if (index === currentSlide || index === currentSlide + 1) {
            const relativeProgress =
              index === currentSlide ? sliderProgress : sliderProgress - 1;
            const parallaxAmount = relativeProgress * slideWidth * 0.25;

            gsap.set(image, {
              x: parallaxAmount,
              scale: 1,
            });
          } else {
            gsap.set(image, {
              x: 0,
              scale: 1,
            });
          }
        }
      });
    },
  });
};
