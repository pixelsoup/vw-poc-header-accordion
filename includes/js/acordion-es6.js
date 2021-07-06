const primaryNavItems = document.querySelectorAll('.npItem')

primaryNavItems.forEach(primaryNavItem => {
  const primaryNavButtonIcon = primaryNavItem.querySelector('.npItemButtonIcon')
  const primaryNavButton = primaryNavItem.querySelector('.npItemButton')
  const secondaryNavLists = document.querySelectorAll('.navSecondaryList')
  const navSecondaryList = primaryNavItem.querySelector('.navSecondaryList')

  primaryNavButton.addEventListener('click', () => {

    // loop through secondaryNavs - add .hideNav if not the one clicked
    secondaryNavLists.forEach(secondaryNavList => {
      const navPrimaryButton = secondaryNavList.parentElement.classList.contains('npItemButtonIcon')
      if (navSecondaryList !== secondaryNavList) {
        secondaryNavList.classList.add('hideNav')
        navPrimaryButton.className = 'expanded'
      }
    })

    navSecondaryList.classList.toggle('hideNav')
    primaryNavButtonIcon.className === 'expanded' ? primaryNavButtonIcon.className = 'collapsed'
    : primaryNavButtonIcon.className = 'expanded'

  })
})