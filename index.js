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
      updateHamburgerColor("black");
    },
    onLeaveBack: () => {
      console.log("Left about section");
      gsap.to(".nav-items", { color: "white", duration: 0.2 });
      gsap.to(".nav-items", { textDecorationColor: "white", duration: 0.2 });
      gsap.to(".logo", { color: "white", duration: 0.2 });
      updateHamburgerColor("white");
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
      updateHamburgerColor("white");
    },
    onLeaveBack: () => {
      console.log("Left image-split-section");
      gsap.to(".nav-items", { color: "black", duration: 0.2 });
      gsap.to(".nav-items", { textDecorationColor: "black", duration: 0.2 });
      gsap.to(".logo", { color: "black", duration: 0.2 });
      updateHamburgerColor("black");
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
      updateHamburgerColor("black");
    },
    onLeaveBack: () => {
      console.log("Left contact section");
      gsap.to(".nav-items", { color: "white", duration: 0.2 });
      gsap.to(".nav-items", { textDecorationColor: "white", duration: 0.2 });
      gsap.to(".logo", { color: "white", duration: 0.2 });
      updateHamburgerColor("white");
    }
  });

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

  // Mobile menu functionality
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const closeBtn = document.querySelector('.close-btn');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-items');

  // Function to update hamburger color based on section
  const updateHamburgerColor = (color) => {
    document.querySelectorAll('.line').forEach(line => {
      line.style.background = color;
    });
  };

  // Open mobile menu
  hamburger.addEventListener('click', () => {
    mobileNav.style.display = 'flex';
    gsap.to(mobileNav, {
      duration: 0.5,
      y: 0,
      ease: 'power2.out'
    });
  });

  // Close mobile menu
  closeBtn.addEventListener('click', () => {
    gsap.to(mobileNav, {
      duration: 0.5,
      y: '-100%',
      ease: 'power2.in',
      onComplete: () => {
        mobileNav.style.display = 'none';
      }
    });
  });

  // Mobile nav items click handlers
  mobileNavItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      const sections = ['#main-section',"#about-section", "#services-section", "#contact-section"];
      gsap.to(window, { 
        duration: 1, 
        scrollTo: { y: sections[index] },
        onComplete: () => {
          // Close menu after navigation
          gsap.to(mobileNav, {
            duration: 0.5,
            y: '-100%',
            ease: 'power2.in',
            onComplete: () => {
              mobileNav.style.display = 'none';
            }
          });
        }
      });
    });
  });
});