// https://codepen.io/codeorum/pen/JjGzMRQ?editors=1010
// https://codeorum.com/tutorials/simple-accordion-collapsible-element-with-vanilla-js-and-simple-animation-effect
const accordionFunction = (accTargetElement, isOpenOnlyOne) => {

  document.addEventListener('click', (clickHandler) => {
    if (!clickHandler.target.matches(accTargetElement + ' .js-accBtn')) return
    else {
      if (!clickHandler.target.parentElement.classList.contains('expanded')) {
        if (isOpenOnlyOne == true) {
          const elementList = document.querySelectorAll(accTargetElement + ' .js-accPanel')
          Array.prototype.forEach.call(elementList, (clickHandler) => {
            clickHandler.classList.remove('expanded')
          })
        }
        clickHandler.target.parentElement.classList.add('expanded')
      } else {
        clickHandler.target.parentElement.classList.remove('expanded')
      }
    }
  })
}

accordionFunction('#js-navPrimaryList', true)
// accordionFunction('#js-navSecondaryMore', false)
