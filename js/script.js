const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger .addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem .addEventListener('click', () => {
    menu.classList.remove('active')
});

const percentages = document.querySelectorAll('.skill__percentage'),
      scales = document.querySelectorAll('.skill__scale .skill__scale-fullness');
      
percentages.forEach( (item, i) => {
    scales[i].style.width = item.innerHTML;
});

