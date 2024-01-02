const menuOnClick = () => {
	const menuBar = document.getElementById('menu-header-bar')
	const nav = document.getElementById('menu-header-nav')
	const menuBg = document.getElementById('menu-header-bg')

	menuBar.classList.toggle('change-menu-header')
	nav.classList.toggle('change-menu-header')
	menuBg.classList.toggle('change-menu-header-bg')
}
