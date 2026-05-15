document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeModal = document.querySelector(".close-modal");

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  const detailBtns = document.querySelectorAll(".view-details");
  detailBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const title = btn.getAttribute("data-title") || "Details";
      const content =
        btn.getAttribute("data-content") || "More information about this item.";

      modalBody.innerHTML = `<h2>${title}</h2><p style="margin-top:20px">${content}</p>`;
      modal.style.display = "flex";
    });
  });

  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const style = window.getComputedStyle(item);
      const url = style.backgroundImage.slice(4, -1).replace(/"/g, "");
      modalBody.innerHTML = `<img src="${url}" style="width:100%; border-radius:4px;">`;
      modal.style.display = "flex";
    });
  });

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      contactForm.innerHTML = `<div style="text-align:center; padding: 40px; border: 2px solid var(--primary-black);">
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
            </div>`;
    });
  }
});
// Function to highlight the current page in the navigation bar
function highlightActivePage() {
  // Get the current page URL (e.g., 'contact.html')
  const currentPath = window.location.pathname.split("/").pop();

  // Loop through all navigation links
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    // If the link's href matches the current page name
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
    // Special case for the homepage if the path is empty
    else if (currentPath === "" && link.getAttribute("href") === "index.html") {
      link.classList.add("active");
    }
  });
}

// Run the function when the page loads
window.addEventListener("DOMContentLoaded", highlightActivePage);
