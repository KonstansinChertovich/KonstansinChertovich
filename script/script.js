
const menu = document.querySelector('.menu'),
      hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click', () => {
   if(hamburger.classList.contains('hamburger_active') && menu.classList.contains('menu_active')) {
        menu.classList.remove('menu_active');
        hamburger.classList.remove('hamburger_active');
   } else {
        menu.classList.add('menu_active');
        hamburger.classList.add('hamburger_active');
        menu.addEventListener('click', (e) => {
            if(e.target.classList.contains('menu_link')) {
                menu.classList.remove('menu_active');
                hamburger.classList.remove('hamburger_active');
            };
        });        
   }
});