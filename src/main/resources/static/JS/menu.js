document.addEventListener('DOMContentLoaded', () => {
	const menuBg = document.getElementById('menu-header-bg')
	const menuBar = document.getElementById('menu-header-bar')
	const nav = document.getElementById('menu-header-nav')

	if (menuBar.classList.contains('change-menu-header')) {
		menuBg.classList.remove('closed')
		nav.classList.add('open')
	} else {
		menuBg.classList.add('closed')
		nav.classList.remove('open')
	}
})

const menuOnClick = () => {
	const menuBar = document.getElementById('menu-header-bar')
	const nav = document.getElementById('menu-header-nav')
	const menuBg = document.getElementById('menu-header-bg')

	menuBar.classList.toggle('change-menu-header')
	nav.classList.toggle('open')
	menuBg.classList.toggle('change-menu-header-bg')

	if (menuBg.classList.contains('change-menu-header-bg')) {
		nav.classList.add('open')
		menuBg.classList.remove('closed')
	} else {
		nav.classList.remove('open')
		menuBg.classList.add('closed')
	}
}

let isMenuOpen = false

document.addEventListener('click', event => {
	const dropdown = document.querySelector('.dropdown-profile')

	if (window.innerWidth <= 1025) {
		if (!dropdown.contains(event.target) && isMenuOpen) {
			dropdown.style.visibility = 'hidden'
			dropdown.style.opacity = 0
			isMenuOpen = false
		} else {
			if (dropdown.contains(event.target) && !isMenuOpen) {
				dropdown.style.visibility = 'visible'
				dropdown.style.opacity = 1
				isMenuOpen = true
			}
		}
	}
})
