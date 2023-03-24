export default(() =>{
    const modalOpenButton = document.querySelector('#open-button');
    const modalContainer = document.querySelector('.modal-container');
    const closeButton = document.querySelector('#close-button');
    modalOpenButton.addEventListener('click', () => {
        modalContainer.style.display = 'flex';
        console.log('abriendo modal');
    });
    closeButton.addEventListener('click', () => {
        modalContainer.style.display = 'none';
        console.log('cerrando modal');
    });
})();

