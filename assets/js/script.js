const tabs = document.querySelectorAll(".tab");
const screenShot = document.querySelector("#screenShot");
const labels = {
  "assets/app-overview.png": "ONE-WEB overview dashboard",
  "assets/app-analyze.png": "ONE-WEB analysis screen with score cards",
  "assets/app-history.png": "ONE-WEB history screen with scan comparison",
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    const image = tab.dataset.screen;
    screenShot.src = image;
    screenShot.alt = labels[image] || "ONE-WEB application screenshot";
  });
});
