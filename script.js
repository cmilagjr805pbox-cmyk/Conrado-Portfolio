const navLinks = document.querySelectorAll("header nav a");
    navLinks.forEach(link => {
      link.addEventListener("mouseenter", () => {
        link.style.transition = "all 0.25s ease";
        link.style.transform = "translateY(-2px)";
        link.style.color = "#222";
      });

      link.addEventListener("mouseleave", () => {
        link.style.transform = "translateY(0)";
        link.style.color = "#8a877f";
      });
    });