document.addEventListener("DOMContentLoaded", () => {
  console.log("index.js loaded");

  // Register the ScrollTrigger and ScrollTo plugins
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // Create a ScrollTrigger instance for the about section
  ScrollTrigger.create({
    trigger: ".about-section",
    start: "top 10%",
    onEnter: () => {
      console.log("Entered about section");
      gsap.to(".nav-items", { color: "black", duration: 0.2 });
      gsap.to(".nav-items", { textDecorationColor: "black", duration: 0.2 });
      gsap.to(".logo", { color: "black", duration: 0.2 });
    },
    onLeaveBack: () => {
      console.log("Left about section");
      gsap.to(".nav-items", { color: "white", duration: 0.2 });
      gsap.to(".nav-items", { textDecorationColor: "white", duration: 0.2 });
      gsap.to(".logo", { color: "white", duration: 0.2 });
    }
  });

  // Create a ScrollTrigger instance for the image-split-section
  ScrollTrigger.create({
    trigger: ".image-split-section",
    start: "top top",
    onEnter: () => {
      console.log("Entered image-split-section");
      gsap.to(".nav-items", { color: "white", duration: 0.2 });
      gsap.to(".nav-items", { textDecorationColor: "white", duration: 0.2 });
      gsap.to(".logo", { color: "white", duration: 0.2 });
    },
    onLeaveBack: () => {
      console.log("Left image-split-section");
      gsap.to(".nav-items", { color: "black", duration: 0.2 });
      gsap.to(".nav-items", { textDecorationColor: "black", duration: 0.2 });
      gsap.to(".logo", { color: "black", duration: 0.2 });
    }
  });

  // Create a ScrollTrigger instance for the contact section
  ScrollTrigger.create({
    trigger: ".contact-section",
    start: "top 10%",
    onEnter: () => {
      console.log("Entered contact section");
      gsap.to(".nav-items", { color: "black", duration: 0.2 });
      gsap.to(".nav-items", { textDecorationColor: "black", duration: 0.2 });
      gsap.to(".logo", { color: "black", duration: 0.2 });
    },
    onLeaveBack: () => {
      console.log("Left contact section");
      gsap.to(".nav-items", { color: "white", duration: 0.2 });
      gsap.to(".nav-items", { textDecorationColor: "white", duration: 0.2 });
      gsap.to(".logo", { color: "white", duration: 0.2 });
    }
  });

  // Add click event listeners for smooth scrolling
  document.querySelector('.logo').addEventListener('click', () => {
    gsap.to(window, { duration: 1, scrollTo: { y: ".main-container" } });
  });

  document.querySelector('.nav-items:nth-child(1)').addEventListener('click', () => {
    gsap.to(window, { duration: 1, scrollTo: { y: "#about-section" } });
  });

  document.querySelector('.nav-items:nth-child(2)').addEventListener('click', () => {
    gsap.to(window, { duration: 1, scrollTo: { y: "#services-section" } });
  });

  document.querySelector('.nav-items:nth-child(3)').addEventListener('click', () => {
    gsap.to(window, { duration: 1, scrollTo: { y: "#contact-section"} });
  });
});