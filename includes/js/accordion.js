// https://codepen.io/codeorum/pen/JjGzMRQ?editors=1010
// https://codeorum.com/tutorials/simple-accordion-collapsible-element-with-vanilla-js-and-simple-animation-effect
const accordionFunction = (accTargetElement, isOpenOnlyOne) => {

  document.addEventListener('click', (handleClick) => {
    if (!handleClick.target.matches(accTargetElement + ' .js-accBtn')) return
    else {
      if (!handleClick.target.parentElement.classList.contains('expanded')) {
        if (isOpenOnlyOne == true) {
          const elementList = document.querySelectorAll(accTargetElement + ' .js-accPanel')
          Array.prototype.forEach.call(elementList, (handleClick) => {
            handleClick.classList.remove('expanded')
          })
        }
        handleClick.target.parentElement.classList.add('expanded')
      } else {
        handleClick.target.parentElement.classList.remove('expanded')
      }
    }
  })
}

accordionFunction('#js-navPrimaryList', true)
// accordionFunction('#js-navSecondaryMore', false)
