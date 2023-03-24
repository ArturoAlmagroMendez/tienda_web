export default(() =>{

    const socialMenuItems = document.querySelectorAll('.team-social-networks');
    socialMenuItems.forEach(socialMenuItem => socialMenuItem.addEventListener('click' , () => {
        socialMenuItem.classList.toggle('active');
    }));

})();