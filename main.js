const shareButton = document.querySelector(".profile-share-btn");
const sharePopup = document.querySelector(".profile-popup");

shareButton.addEventListener("click", function (event) {
  sharePopup.classList.toggle("hidden");
  shareButton.classList.toggle("active");
  event.stopPropagation();
});

document.addEventListener("click", function (event) {
  if (
    !sharePopup.contains(event.target) &&
    !shareButton.contains(event.target)
  ) {
    hidePopup();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    hidePopup();
  }
});

function hidePopup() {
  if (!sharePopup.classList.contains("hidden")) {
    sharePopup.classList.add("hidden");
    shareButton.classList.remove("active");
  }
}
