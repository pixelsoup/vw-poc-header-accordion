const navAccordion = () => {

  document.addEventListener('click', (primaryNavBtn) => {
    if (!primaryNavBtn.target.matches('.js-npItemButton')) return
    else {
      if (!primaryNavBtn.target.parentElement.classList.contains('expanded')) {
        const npItems = document.querySelectorAll('.js-npItem')
        Array.prototype.forEach.call(npItems, (primaryNavBtn) => {
          primaryNavBtn.classList.remove('expanded')
        })
        primaryNavBtn.target.parentElement.classList.add('expanded')
      } else {
        primaryNavBtn.target.parentElement.classList.remove('expanded')
      }
    }
  })
}

navAccordion()