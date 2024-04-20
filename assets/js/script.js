document.addEventListener("DOMContentLoaded", function () {
  // ============ Start onBoarding Screens ============
  const nextButton = document.getElementById("nextBtn");
  const skipButton = document.getElementById("skipButton");
  const dots = document.querySelectorAll(".dot");
  const stepsContainer = document.getElementById("steps-container");
  const steps = document.querySelectorAll(".step");

  let currentStep = 0;

  nextButton.addEventListener("click", function () {
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateStep();
    } else {
      window.location.href = "signin.html";
    }
  });

  function updateStep() {
    stepsContainer.style.transform = `translateX(-${currentStep * 350}px)`;
    updateDots();
    if (currentStep >= steps.length - 1) {
      skipButton.style.display = "none";
      nextButton.style.width = "100px";
      nextButton.style.padding = "5px";
      nextButton.innerHTML = "Agissez!";
    }
  }

  function updateDots() {
    dots.forEach((dot, index) => {
      if (index === currentStep) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }
  // ============ End onBoarding Screens ============
});
