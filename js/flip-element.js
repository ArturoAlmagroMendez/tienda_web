export default (() => {
    const flipButtons = document.querySelectorAll('.contact-btn');

    flipButtons.forEach((flipButton) => {
        flipButton.addEventListener('click' , () =>{
            flipButton.closest('.flip-card-inner').classList.toggle('active');
        });
    });
   
})();