// Sørg for at registrere ScrollTrigger-pluginet
gsap.registerPlugin(ScrollTrigger);

// GSAP animation for the sun on the homepage
const timeline = gsap.timeline({
  onUpdate: function () {
    const progress = Math.round(this.progress() * 100);
    document.getElementById("counter").textContent = progress;
  }
});

// Sun implosion and color change
timeline.to("#sun circle", {
  duration: 5,
  scale: 0.3,
  fill: "pink",
  ease: "power2.inOut"
}).to("#sun circle", {
  duration: 3,
  fill: "linear-gradient(90deg, pink, salmon, turquoise, rainbow)",
  ease: "none"
});

// Background color change
timeline.to("#container", {
  backgroundColor: "lightblue",
  duration: 5
}, "-=5");

// Scroll-based animations for portfolio sections
gsap.from(".content-item", {
  x: -200,
  opacity: 0,
  scrollTrigger: {
    trigger: ".content-item",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});
