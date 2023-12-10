// running the defaults for all scroll reveal animations on the page
ScrollReveal({ origin: 'bottom', reset: true });

// adding desktop scroll reveal animation on the elements with the specified css classes
ScrollReveal().reveal( '.scroll-text, .scroll-image', { distance: '80px', mobile: false });
ScrollReveal().reveal( '.headline, .headline-admonition', { distance: '50px', delay: 200, mobile: false });


// adding mobile scroll reveal animation on the elements with the specified css classes
ScrollReveal().reveal( '.scroll-text, .scroll-image', { distance: '80px', desktop: false });
ScrollReveal().reveal( '.headline, .headline-admonition', { distance: '50px', delay: 200, desktop: false });