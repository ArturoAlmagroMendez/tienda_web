export default(() =>{
    const modalOpenButton = document.querySelector('#header-button');
    const modalContainer = document.querySelector('.modal-container');
    const modalButton = document.querySelector('#modal-button');
    const textSlider = document.querySelector('.modal-content');
    const closeButton = document.querySelector('.close-button');
    const activeLink = document.querySelector('.modal-content ul li a.active');
    const productLinks = document.querySelectorAll('.modal-content ul li a');
    const listItems = document.querySelectorAll('.modal-description-list li a');

    listItems.forEach((item) => {
    item.addEventListener('click', () => {
        const target = item.dataset.target;
        const targetElement = document.getElementById(target);
        const activeElement = document.querySelector('.modal-description-text.active');
        activeElement.classList.remove('active');
        targetElement.classList.add('active');
    });
    });

    modalButton.addEventListener('click', () => {
        textSlider.classList.toggle('active');
        closeButton.classList.toggle('active'); 
        closeButton.classList.add('active');
    });
    modalOpenButton.addEventListener('click', () => {
        modalContainer.classList.add('active');
       
    });

    closeButton.addEventListener('click' , () =>{
        modalContainer.classList.remove('active');
        textSlider.classList.remove('active');
        closeButton.classList.remove('active');
        
    });
   
    for(let i = 0; i < productLinks.length; i++){
        productLinks[i].addEventListener('click' , () => {
            if (activeLink != productLinks[i]){
                activeLink.classList.remove('active');
                productLinks[i].classList.add('active');
            }
            productLinks[i].classList.add('active');
        });
    }
    // productLinks.forEach((productLink) => {
    //     if(){

    //     }
        // productLink.addEventListener('click' , () =>{
        //     if(productLink.classList.contains('active')){
                
        //     }else if(productLinks.forEach){

        //     } else {
        //         productLink.classList.add('active');
        //     }
        // });
    // });
    
})();

