export default (() => {
    const dropDownItems = document.querySelectorAll('.faqs-item .question-symbol');
    const invisibleItems = document.querySelectorAll('.faqs-item .answer');
    
    dropDownItems.forEach(dropDownItem => dropDownItem.addEventListener('click' , () =>{
        
        let dropDownParent = dropDownItem.closest('.faqs-item');
        let invisibleItem = dropDownParent.querySelector('.answer');
        let activeItem = dropDownParent.querySelector('.answer.active');
        
        if(activeItem && activeItem !== invisibleItem) {
            activeItem.classList.toggle('active');
        }
        
        if (!invisibleItem.classList.contains('active')) {
            invisibleItem.classList.add('active');
            setTimeout(() => invisibleItem.classList.add('fade-in'), 50);
        } else {
            invisibleItem.classList.remove('fade-in');
            setTimeout(() => invisibleItem.classList.remove('active'), 400);
        }
        
        console.log("clicando faq desplegable");
    }));
})();
  
