document.addEventListener("DOMContentLoaded", () => {
  const shareButton = document.querySelector(".profile-share-btn");
  const sharePopup = document.querySelector(".profile-popup");
  const sharePopupMobile = document.querySelector(".profile-mobile-popup");

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

  function removeEventListenersMobile() {
    shareButton.removeEventListener("click", togglePopupMobile);
    document.removeEventListener("click", handleClickOutsideMobile);
  }

  function togglePopup(event) {
    sharePopup.classList.toggle("hidden");
    shareButton.classList.toggle("active");
  }

  function togglePopupMobile(event) {
    sharePopupMobile.classList.toggle("hidden");
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

  function handleClickOutsideMobile(event) {
    if (
      !sharePopupMobile.contains(event.target) &&
      !shareButton.contains(event.target)
    ) {
      hidePopupMobile();
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

  function hidePopupMobile() {
    if (!sharePopupMobile.classList.contains("hidden")) {
      sharePopupMobile.classList.add("hidden");
      shareButton.classList.remove("active");
    }
  }

  function handleMediaChange(e) {
    if (e.matches) {
      addEventListeners();
      hidePopupMobile();
      removeEventListenersMobile();
    } else {
      removeEventListeners();
      hidePopup();
      addSmallScreenListeners();
    }
  }

  function addSmallScreenListeners() {
    shareButton.addEventListener("click", togglePopupMobile);
    document.addEventListener("click", handleClickOutsideMobile);
  }

  handleMediaChange(mediaQuery);

  mediaQuery.addEventListener("change", handleMediaChange);
});
