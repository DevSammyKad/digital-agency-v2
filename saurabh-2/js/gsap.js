// Register GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Select all child elements within the "contact-stack-logos" container
const childElements = gsap.utils.toArray(".contact-stack-logos img");

// Create a timeline to stagger the animations
const animationTimeline = gsap.timeline();

childElements.forEach((element, index) => {
  animationTimeline.from(element, {
    opacity: 0, // Start with opacity set to 0
    duration: 1, // Duration of the fade-in animation
    scrollTrigger: {
      trigger: element, // Use the current element as the trigger
      start: "30", // Animation starts when the top of the element is at the center of the viewport
      end: "bottom center", // Animation ends when the bottom of the element is at the center of the viewport
      scrub: true, // Enables scrubbing for smooth animation
    },
  });
});
