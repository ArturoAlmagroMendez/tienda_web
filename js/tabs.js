export default(() =>{
    const productLinks = document.querySelectorAll('.modal-content ul li a');
    productLinks.forEach((item) => {
        item.addEventListener('click', () => {
            const target = item.dataset.target;
            const targetElement = document.getElementById(target);
            const activeText = document.querySelector('.modal-description-text.active');
            activeText.classList.remove('active');
            targetElement.classList.add('active');
        });
    });
    for(let i = 0; i < productLinks.length; i++){
        productLinks[i].addEventListener('click' , () => {
            const activeLink = document.querySelector('.modal-content ul li a.active');
            if (activeLink != productLinks[i]){
                activeLink.classList.remove('active');
                productLinks[i].classList.add('active');
            }
        });
    }
})();