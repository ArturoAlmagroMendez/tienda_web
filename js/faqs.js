export default (() => {
    const dropDownItems = document.querySelectorAll('.faqs-item .question-symbol');
    const invisibleItems = document.querySelectorAll('.faqs-item .answer');
    
    dropDownItems.forEach(dropDownItem => dropDownItem.addEventListener('click' , () =>{
        let dropDownParent = dropDownItem.parentElement;
        let answer = dropDownParent.parentElement;
        let invisibleItem = answer.querySelector('.answer');
        invisibleItem.classList.toggle('.active');
        console.log("clicando faq desplegable");
    }));
})();
  
