TweenMax.to(".titulo1", 2, {
  x: 30,
  opacity: 1,
  ease: Expo.easeInOut
});

TweenMax.to(".titulo2", 2, {
  delay: 0.4,
  x: -10,
  opacity: 1,
  ease: Expo.easeInOut
});

TweenMax.from(".runner", 2, {
  delay: 1.1,
  x: -80,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".box1", 4, {
  delay: 1.1,
  rotation: 200,
  transformOrigin: "50% 50%",
  opacity: 0,
  x: -180,
  ease: Expo.easeInOut
});

TweenMax.from(".box2", 4, {
  delay: 1.1,
  rotation: 90,
  transformOrigin: "50% 50%",
  opacity: 0,
  x: -180,
  ease: Expo.easeInOut
});

TweenMax.from(".box3", 4, {
  delay: 1.1,
  rotation: 180,
  transformOrigin: "50% 50%",
  opacity: 0,
  x: -180,
  ease: Expo.easeInOut
});

TweenMax.from(".patron", 2, {
  delay: 0.8,
  width: 0,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".logo", 2, {
  delay: 0.9,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.staggerFrom(
  ".menu ul li ",
  2,
  {
    delay: 0.9,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
  },
  0.3
);

TweenMax.from(".cart", 2, {
  delay: 1.7,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.staggerFrom(
  ".media ul li",
  2,
  {
    delay: 2,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
  },
  0.3
);

TweenMax.from(".contenido", 2, {
  delay: 2.4,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".contenido button", 2, {
  delay: 2.6,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});
