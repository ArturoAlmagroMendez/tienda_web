export default(() =>{
    let OpenIcons = document.querySelectorAll('.team-social-networks .social-networks.active');
    let closeIcons = document.querySelectorAll('.social-networks.inactive');
    const socialMenuItems = document.querySelectorAll('.team-social-networks');
    const socialNetworkIcons = document.querySelectorAll('.social-networks-icons');

    for(let i = 0; i < OpenIcons.length; i++){
        OpenIcons[i].addEventListener('click' , () => {
            toggleIcons(i);
        });
        closeIcons[i].addEventListener('click' , () => {
            toggleIcons(i);
        });
    }
    //Como se está utilizando toggle no hace falta utilizar una función para esconder los iconos,se puede reutilizar la misma función.
    function toggleIcons(i){
        socialMenuItems[i].classList.toggle('active');
        OpenIcons[i].classList.toggle('active');
        OpenIcons[i].classList.toggle('inactive');
        closeIcons[i].classList.toggle('inactive');
        closeIcons[i].classList.toggle('active');
        socialNetworkIcons[i].classList.toggle('active');
    }
})();