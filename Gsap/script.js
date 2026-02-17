var t1 = gsap.timeline();

t1.from("#nav h3", {
  y: -50,
  opacity: 0,
  duration: 0.6,
  delay: 0.4,
  stagger: 0.4,
});
t1.from("#center h1", {
  x: -500,
  opacity: 0,
  duration: 0.6,
  delay: 0.4,
  stagger: 0.4,
});
t1.from("img", {
  rotate: 45,
  stagger: 0.4,
  opacity: 0,
  delay: 0.3,
  duration: 0.5,
});
