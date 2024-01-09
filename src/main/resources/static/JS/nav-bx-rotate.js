document.addEventListener('DOMContentLoaded', function () {
	const navigationElement = document.querySelector('.bxs-navigation')

	navigationElement.addEventListener('click', function () {
		this.classList.toggle('rotate-bx-nav')
	})
})
