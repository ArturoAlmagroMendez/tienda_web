export default(() =>{
    const featuredContainer = document.querySelector('.featured .featured-item');
    const animatedHeader = document.querySelector('.featured .featured-title h2');
    const animatedText = document.querySelector('.featured-subtitle p');
    
    function isScrolledIntoView(el) {
        const rect = el.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;
        const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        return isVisible;
    }

    function checkHeaderAnimation() {
    if (isScrolledIntoView(featuredContainer)) {
        setTimeout(() => animatedHeader.classList.add('fade-in-text'), 1000);
        setTimeout(() => animatedHeader.classList.add('fade-in-text'), 1000);
        setTimeout(() => animatedHeader.classList.add('animate'),2000);
        setTimeout(() => animatedText.classList.add('fade-in-text'), 3000);
        setTimeout(() => animatedText.classList.add('animate'), 3500);
    } else {
        animatedHeader.classList.remove('animate');
        animatedText.classList.remove('animate');
        animatedText.classList.remove('fade-in-text');
    }
    }

    window.addEventListener('scroll', checkHeaderAnimation);
})();