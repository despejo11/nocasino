const inputs = document.querySelectorAll('.input-field')
const toggle_btn = document.querySelectorAll('.toggle')
const main = document.querySelector('main')
const bullets = document.querySelectorAll('.bullets span')
const images = document.querySelectorAll('.image')
let currentIndex = 0

inputs.forEach(inp => {
	inp.addEventListener('focus', () => {
		inp.classList.add('active')
	})
	inp.addEventListener('blur', () => {
		if (inp.value !== '') return
		inp.classList.remove('active')
	})
})

toggle_btn.forEach(btn => {
	btn.addEventListener('click', () => {
		main.classList.toggle('sign-up-mode')
	})
})

function moveSlider(index) {
	currentIndex = index

	let currentImage = document.querySelector(`.img-${index + 1}`)
	images.forEach(img => img.classList.remove('show'))
	currentImage.classList.add('show')

	const textSlider = document.querySelector('.text-group')
	textSlider.style.transform = `translateY(${-index * 2.2}rem)`

	bullets.forEach(bull => bull.classList.remove('active'))
	bullets[index].classList.add('active')
}

function changeSlider() {
	currentIndex = (currentIndex + 1) % bullets.length
	moveSlider(currentIndex)
}

bullets.forEach((bullet, index) => {
	bullet.addEventListener('click', () => moveSlider(index))
})

setInterval(changeSlider, 5000)
moveSlider(currentIndex)
