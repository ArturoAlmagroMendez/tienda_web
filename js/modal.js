export default(() =>{
    const modalOpenButton = document.querySelector('#header-button');
    const modalContainer = document.querySelector('.modal-container');
    const closeButton = document.querySelector('#close-button');
    modalOpenButton.addEventListener('click', () => {
        modalContainer.classList.add('active');
        console.log('abriendo modal');
    });
    closeButton.addEventListener('click', () => {
        modalContainer.classList.remove('active');
        console.log('cerrando modal');
    });
})();

