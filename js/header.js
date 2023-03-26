export default (() => {
    const myButton = document.querySelector('#header-button');
    const headerLinks = document.querySelectorAll('.nav-list ul li a');
    const featured = document.querySelector('#featured');
    const details = document.querySelector('#details');
    const team = document.querySelector('#team');
    const faqs = document.querySelector('#faqs');
    const contact = document.querySelector('#contact');

    const sectionColors = {
        featured: getComputedStyle(document.documentElement).getPropertyValue('--color-featured'),
        details: getComputedStyle(document.documentElement).getPropertyValue('--color-details'),
        team: getComputedStyle(document.documentElement).getPropertyValue('--color-team'),
        faqs: getComputedStyle(document.documentElement).getPropertyValue('--color-faqs'),
        contact: getComputedStyle(document.documentElement).getPropertyValue('--color-contact'),
      };
  
    const thresholds = [
        {section: featured, threshold: 0}, // Umbral de la sección 'featured'
        {section: details, threshold: featured.offsetHeight}, // Umbral de la sección 'details'
        {section: team, threshold: featured.offsetHeight + details.offsetHeight}, // Umbral de la sección 'team'
        {section: faqs, threshold: featured.offsetHeight + details.offsetHeight + team.offsetHeight}, // Umbral de la sección 'faqs'
        {section: contact, threshold: featured.offsetHeight + details.offsetHeight + team.offsetHeight + faqs.offsetHeight}, // Umbral de la sección 'contact'
    ];
    
    window.addEventListener('scroll', () => { // Agrega un evento de desplazamiento de ventana
        const scrollPos = window.pageYOffset; // La posición del desplazamiento en la página
    
        for (let i = thresholds.length - 1; i >= 0; i--) { 
            const threshold = thresholds[i]; // Define el umbral actual
  
            if (scrollPos >= threshold.threshold) {
                threshold.section.classList.add('active');
                // Recorre cada enlace y agrega la clase correspondiente
                headerLinks.forEach(link => {
                    link.classList.remove(`${threshold.section.id}-color`);
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${threshold.section.id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.add(`${threshold.section.id}-color`);
                    }
                });
                break;
            } else {
                threshold.section.classList.remove('active');
                link.classList.remove('active');
                myButton.classList.remove(`${threshold.section.id}-color`);
            }
        }
    
        if (!myButton.classList.contains('active') && contact.classList.contains('active')) {
            myButton.classList.add('active');
        }
    });
})();
