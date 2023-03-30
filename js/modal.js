export default(() =>{
    const modalOpenButton = document.querySelector('#header-button');
    const modalContainer = document.querySelector('.modal-container');
    const modalButton = document.querySelector('#modal-button');
    const textSlider = document.querySelector('.modal-content');
    const closeButton = document.querySelector('#close-button');
    modalButton.addEventListener('click', () => {
        textSlider.classList.toggle('active');
        closeButton.classList.toggle('active'); 
    });
    modalOpenButton.addEventListener('click', () => {
        modalContainer.classList.add('active');
    });
    closeButton.addEventListener('click', () => {
        modalContainer.classList.remove('active');
        textSlider.classList.remove('active');
        closeButton.classList.remove('active'); 
    });

})();

