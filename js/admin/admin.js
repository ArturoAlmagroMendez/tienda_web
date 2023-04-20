export default(() =>{

    let tabcontent = document.getElementById('images');
    tabcontent.style.display = "none";

    let tablinks = document.querySelectorAll(".admin-content-login-tab");

    tablinks.forEach(tablink => {
        tablink.addEventListener('click', () => {
          console.log("tabtab");
          let dataSet = tablink.dataset.set;
          document.getElementById(dataSet).style.display = "block";
        });
      });  
})();
  