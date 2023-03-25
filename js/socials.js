export default(() =>{
    let OpenIcons = document.querySelectorAll('.team-social-networks .social-networks.active');
    let closeIcons = document.querySelectorAll('.social-networks.inactive');
    const socialMenuItems = document.querySelectorAll('.team-social-networks');
    const socialNetworkIcons = document.querySelectorAll('.social-networks-icons');
    let timeOut;

    for(let i = 0; i < OpenIcons.length; i++){
        OpenIcons[i].addEventListener('click' , () => {
            showIcons(i, 350);
        });
        closeIcons[i].addEventListener('click' , () => {
            showIcons(i, 50);
        });
    }
    function showIcons(i, timeOut){
        socialMenuItems[i].classList.toggle('active');
        OpenIcons[i].classList.toggle('active');
        OpenIcons[i].classList.toggle('inactive');
        closeIcons[i].classList.toggle('inactive');
        closeIcons[i].classList.toggle('active');
        setTimeout(() => {
            socialNetworkIcons[i].classList.toggle('active');
        }, timeOut);
    }
    function hideIcons(i){
        socialMenuItems[i].classList.toggle('active');
        OpenIcons[i].classList.toggle('active');
        OpenIcons[i].classList.toggle('inactive');
        closeIcons[i].classList.toggle('inactive');
        closeIcons[i].classList.toggle('active');
        socialNetworkIcons[i].classList.toggle('active'); 
    }

    

})();