export default (() => {
  const modalOpenButton = document.querySelector("#header-button");
  const modalContainer = document.querySelector(".modal-container");
  const modalButton = document.querySelector("#modal-button");
  const textSlider = document.querySelector(".modal-content");
  const closeButton = document.querySelector(".close-button");
  const returnButtonContainer = document.querySelector(".modal-return-button");
  const returnButton = document.querySelector(".return-button");
  const tabs = document.querySelectorAll(
    ".modal-description .modal-description-list ul li a"
  );
  const activeText = document.querySelector("#modal-description-text");
  const tabsTexts = document.querySelectorAll(
    ".modal-description .modal-description-list .modal-description-text"
  );
  const activeTab = document.querySelector(
    ".modal-description .modal-description-list ul li a"
  );
  modalButton.addEventListener("click", () => {
    textSlider.classList.add("active");
    returnButtonContainer.classList.add("active");
  });
  modalOpenButton.addEventListener("click", () => {
    modalContainer.classList.add("active");
  });
  closeButton.addEventListener("click", () => {
    modalContainer.classList.remove("active");
    textSlider.classList.remove("active");
    closeButton.classList.remove("active");
    returnButtonContainer.classList.remove("active");

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    activeTab.classList.add("active");

    tabsTexts.forEach((tabText) => {
      tabText.classList.remove("active");
    });
    activeText.classList.add("active");
  });
  returnButton.addEventListener("click", () => {
    textSlider.classList.remove("active");
    returnButtonContainer.classList.remove("active");
  });
})();
