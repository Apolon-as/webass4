document.LastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;

document.addEventListener('scroll', () => {
    const direction = window.pageYOffset - document.LastScrollPosition > 0 ? 'down' : 'up';
    const sections = [...document.querySelectorAll('section')];

    if (document.onWayTo === null) {
        const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1;
        if (destIndex >= 0 && destIndex < sections.length) {
            console.log({ destIndex, direction });
            document.onWayTo = destIndex;
            window.scrollTo(0, sections[destIndex].offsetTop);
        }
    }

    sections.forEach((section, index) => {
        if (window.pageYOffset === section.offsetTop) {
            document.lastCentered = index;
            section.classList.add('active');
            if (document.onWayTo === index) {
                document.onWayTo = null;
            }
        } else {
            section.classList.remove('active');
        }
    })

    document.LastScrollPosition = window.pageYOffset;
});