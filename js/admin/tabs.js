export default (() => {
  const tabs = document.querySelectorAll(".tab");
  const tabsContent = document.querySelectorAll(".tab-content");

  tabs.forEach((item) => {
    item.addEventListener("click", () => {
      tabsContent.forEach((tabContent) => {
        tabContent.classList.remove("active");
      });
      tabs.forEach((tab) => {
        tab.classList.remove("active");
        tab.parentElement.classList.remove('active');
      });
      const target = item.dataset.target;
      const targetElement = document.getElementById(target);
      targetElement.classList.add("active");
      item.classList.add("active");
      item.parentElement.classList.add("active");
    });
  });
})();
