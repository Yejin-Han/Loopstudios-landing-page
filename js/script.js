const headerToggle = document.querySelector('.header__toggle');
const headerNav = document.querySelector('.header__nav');

headerToggle.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('header__toggle--on');

    if(e.currentTarget.classList.contains('header__toggle--on')) {
        headerNav.classList.add('header__nav--active');
    } else {
        headerNav.classList.remove('header__nav--active');
    }
});