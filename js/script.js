document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");
  const links = document.querySelectorAll(".navbar a");

  // Function to handle the sticky header
  function stickyHeader() {
      if (window.scrollY > 0) {
          header.classList.add("sticky");
      } else {
          header.classList.remove("sticky");
      }
  }

  // Sticky header on scroll
  window.addEventListener("scroll", stickyHeader);

  // Smooth scroll for navigation links
  links.forEach((link) => {
      link.addEventListener("click", (e) => {
          e.preventDefault();
          document.querySelector(link.getAttribute("href")).scrollIntoView({
              behavior: "smooth"
          });
      });
  });

  // Toggle menu icon and navbar for mobile view
  menuIcon.addEventListener("click", () => {
      navbar.classList.toggle("active");
  });

  // Handle responsiveness: mobile vs desktop
  function handleResponsive() {
      const isMobile = window.innerWidth <= 768; // Customize the breakpoint for mobile devices

      if (isMobile) {
          // Hide the navbar in mobile view by default
          navbar.classList.remove("active");
          menuIcon.style.display = "block"; // Show the menu icon in mobile
      } else {
          // Always show navbar in desktop view
          navbar.classList.add("active");
          menuIcon.style.display = "none"; // Hide the menu icon in desktop
      }
  }

  // Call handleResponsive when the page loads and when the window is resized
  handleResponsive();
  window.addEventListener("resize", handleResponsive);

  // Animation for text
  const textAnimate = document.querySelector(".text-animate h3");
  const textArray = ["Web Developer",  "Freelancer"];
  let textIndex = 0;
  let charIndex = 0;

  function type() {
      if (charIndex < textArray[textIndex].length) {
          textAnimate.textContent += textArray[textIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, 200);
      } else {
          setTimeout(erase, 2000);
      }
  }

  function erase() {
      if (charIndex > 0) {
          textAnimate.textContent = textArray[textIndex].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(erase, 100);
      } else {
          textIndex++;
          if (textIndex >= textArray.length) textIndex = 0;
          setTimeout(type, 1000);
      }
  }

  // Start text animation
  if (textArray.length) setTimeout(type, 1000);
});
