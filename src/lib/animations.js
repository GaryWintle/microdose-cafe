// src/lib/animations.js
import { gsap } from 'gsap';

export function heroAnimation(target) {
  gsap.fromTo(
    target,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
  );
}
