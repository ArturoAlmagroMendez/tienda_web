export default (() => {
    console.log("Me he importado correctamente");

    const myButton = document.querySelector('#header-button');
    const headerLinks = document.querySelectorAll('.nav-list ul li a');
    const slider = document.querySelector('#slider');
    const featured = document.querySelector('#featured');
    const details = document.querySelector('#details');
    const team = document.querySelector('#team');
    const faqs = document.querySelector('#faqs');
    const contact = document.querySelector('#contact');

    const sectionColors = {
        slider: getComputedStyle(document.documentElement).getPropertyValue('--color-slider'),
        featured: getComputedStyle(document.documentElement).getPropertyValue('--color-featured'),
        details: getComputedStyle(document.documentElement).getPropertyValue('--color-details'),
        team: getComputedStyle(document.documentElement).getPropertyValue('--color-team'),
        faqs: getComputedStyle(document.documentElement).getPropertyValue('--color-faqs'),
        contact: getComputedStyle(document.documentElement).getPropertyValue('--color-contact'),
    };
    
    const thresholds = [
    {section: slider, threshold: 0},
    {section: featured, threshold: slider.offsetHeight},
    {section: details, threshold: slider.offsetHeight + featured.offsetHeight},
    {section: team, threshold: slider.offsetHeight + featured.offsetHeight + details.offsetHeight},
    {section: faqs, threshold: slider.offsetHeight + featured.offsetHeight + details.offsetHeight + team.offsetHeight},
    {section: contact, threshold: slider.offsetHeight + featured.offsetHeight + details.offsetHeight + team.offsetHeight + faqs.offsetHeight},
    ];


    let link = headerLinks[0];

    window.addEventListener('scroll', () => {
        const scrollPos = window.pageYOffset;

        for (let i = thresholds.length - 1; i >= 0; i--) {
            const threshold = thresholds[i];

            if (scrollPos >= threshold.threshold) {
                const newClasses = ['active', `${threshold.section.id}-color`];

                headerLinks.forEach((currentLink) => {
                    const href = currentLink.getAttribute('href');
                    const isCurrentLink = href === `#${threshold.section.id}`;
                  
                    if (isCurrentLink) {
                      link = currentLink;
                    }
                    
                    currentLink.classList.remove('active', 'slider-color', 'featured-color', 'details-color', 'team-color', 'faqs-color', 'contact-color');
                    if (isCurrentLink) {
                      currentLink.classList.add('active', `${threshold.section.id}-color`);
                      myButton.classList.add(`${threshold.section.id}-color`);
                    } else {
                      currentLink.classList.add(`${threshold.section.id}-color`);
                    }
                });
                break;
            } else {
                threshold.section.classList.remove('active');
                link.classList.remove('active');
                myButton.classList.remove('slider-color','featured-color', 'details-color', 'team-color', 'faqs-color', 'contact-color');
            }
        }
    });
})();
