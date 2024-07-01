document.addEventListener("DOMContentLoaded", () => {
  const shareButton = document.querySelector(".profile-share-btn");
  const sharePopup = document.querySelector(".profile-popup");

  const mediaQuery = window.matchMedia("(min-width: 768px)");

  function addEventListeners() {
    shareButton.addEventListener("click", togglePopup);
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscKeyPress);
  }

  function removeEventListeners() {
    shareButton.removeEventListener("click", togglePopup);
    document.removeEventListener("click", handleClickOutside);
    document.removeEventListener("keydown", handleEscKeyPress);
  }

  function togglePopup(event) {
    sharePopup.classList.toggle("hidden");
    shareButton.classList.toggle("active");
  }

  function handleClickOutside(event) {
    if (
      !sharePopup.contains(event.target) &&
      !shareButton.contains(event.target)
    ) {
      hidePopup();
    }
  }

  function handleEscKeyPress(event) {
    if (event.key === "Escape") {
      hidePopup();
    }
  }

  function hidePopup() {
    if (!sharePopup.classList.contains("hidden")) {
      sharePopup.classList.add("hidden");
      shareButton.classList.remove("active");
    }
  }

  function handleMediaChange(e) {
    if (e.matches) {
      addEventListeners();
    } else {
      removeEventListeners();
      hidePopup();
      addSmallScreenListeners();
    }
  }

  function addSmallScreenListeners() {
    // Add any event listeners or behavior specific to small screens
    // Example: maybe a simple toggle with different styling or logic
  }

  handleMediaChange(mediaQuery);

  mediaQuery.addEventListener("change", handleMediaChange);
});
