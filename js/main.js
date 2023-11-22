let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.querySelector(".navbar");

  if (prevScrollPos > currentScrollPos) {
    navbar.style.transform = "translateY(0)";
  } else {
    navbar.style.transform = "translateY(-150px)";
  }

  prevScrollPos = currentScrollPos;
});

// this code for portfolio tabs change
const categoryTabs = document.querySelectorAll(".category-tab");

categoryTabs.forEach((categoryChange) => {
  categoryChange.addEventListener("click", () => {
    categoryTabs.forEach((t) => t.classList.remove("active"));
    categoryChange.classList.add("active");
  });
});

// Get a reference to the container element
const container = document.getElementById("lottie-container");

// Specify the path to your JSON animation file
const animationData = {
  container: container, // The HTML container
  renderer: "svg", // You can also use 'canvas' or 'html'
  loop: true, // Set to true if you want the animation to loop
  autoplay: true, // Set to true if you want the animation to play automatically
  path: "./js_files/Animation-hero.json", // Path to your JSON animation file
};

// Load and display the animation
const anim = lottie.loadAnimation(animationData);

// Reusable function to initialize Lottie animations
function initializeLottieAnimation(containerId, animationPath) {
  const animationContainer = document.getElementById(containerId);
  const animationData = {
    container: animationContainer,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  const animation = lottie.loadAnimation(animationData);
  animationContainer.style.width = "100%";
  animationContainer.style.height = "30px";
}

initializeLottieAnimation("testimonial-rating", "./js_files/star.json");

initializeLottieAnimation("testimonial-rating-second", "./js_files/star.json");

initializeLottieAnimation("testimonial-rating-third", "./js_files/star.json");

initializeLottieAnimation("testimonial-rating-four", "./js_files/star.json");

initializeLottieAnimation("testimonial-rating-five", "./js_files/star.json");

initializeLottieAnimation("testimonial-rating-six", "./js_files/star.json");
