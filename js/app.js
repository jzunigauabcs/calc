const btns = document.querySelectorAll('.btn')

btns.forEach((el) => {
	el.addEventListener('click', () => {
		let charSelect = el.textContent

		if (charSelect === 'c') {
			clearScreen()
		} else if (charSelect === '=') {
			let result = calc(getScreenResult())
			showScreenResult(result)
		} else {
			appendChar(charSelect)
		}
	})
})

const getScreenResult = function () {
	return document.querySelector('.screen-result').innerText
}

const setScreenResult = function (str) {
	document.querySelector('.screen-result').innerText = str
}

const clearScreen = function () {
	setScreenResult(0)
}

const appendChar = function (char) {
	setScreenResult(clearExresionScreen(getScreenResult(),char))
}

const calc = function (expression) {
	return eval(clearExpresion(expression))
}

const showScreenResult = function (result) {
	document.querySelector('.screen-result').innerText = result
}

const clearExpresion = function(expression) {
	return expression.replace(/x/g, '*')
}

const clearExresionScreen = function (expression, char) {
	let firstZero = /^0/
	let number = /[0-9]/

	if(firstZero.test(expression) && number.test(char)) {
		expression = expression.replace(firstZero, '')
	}
	expression += char
	return expression
}