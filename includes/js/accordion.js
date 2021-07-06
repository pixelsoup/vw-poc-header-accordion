const navAccordion = () => {

  // https://css-tricks.com/slightly-careful-sub-elements-clickable-things/
  // Stops a situation where other JavaScript prevents the event from bubbling up to the button itself (or higher)
  document.querySelector('.npItemButtonIcon').addEventListener('click', (iconNoClick) => {
    iconNoClick.stopPropagation()
    iconNoClick.preventDefault()
  })

  document.addEventListener('click', (primaryNavBtn) => {
    if (!primaryNavBtn.target.matches('.js-npItemButton')) return;
    else {
      if (!primaryNavBtn.target.parentElement.classList.contains('expanded')) {
        const elementList = document.querySelectorAll('.js-npItem ');
        Array.prototype.forEach.call(elementList, function(primaryNavBtn) {
          primaryNavBtn.classList.remove('expanded');
        });
        primaryNavBtn.target.parentElement.classList.add('expanded');
      } else {
        primaryNavBtn.target.parentElement.classList.remove('expanded');
      }
    }
  });
}

navAccordion()