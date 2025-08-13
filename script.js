// Function to smoothly scroll to the "info-section" when called
function scrollToSection() {
  
  // Get the section element with the ID "info-section"
  const section = document.getElementById("info-section");
  
  // Scroll to that section smoothly
  section.scrollIntoView({ 
    behavior: "smooth" // Enables smooth scrolling animation
  });
}

