gsap.from(".logo", {
  x: -120,
  duration: 2,
});

gsap.from(".menu", {
  y: -120,
  duration: 2,
  delay: 1,
});

gsap.from(".btn", {
  x: 120,
  duration: 2,
});

gsap.fromTo(
  "h1",
  {
    duration: 3,
    delay: 3,
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 3,
    delay: 3,
  }
);

gsap.from(".era", {
  x: -150,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  delay: 4,
});

gsap.from(".gaming", {
  x: 150,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  delay: 5,
});
