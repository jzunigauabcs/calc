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
	let operators = /[\+|x|\-|\/]$/
	let firstZero = /^0/
	let number = /[0-9]/
	let isPoint = /\./
	let point = /\.$|\.\d$/

	if(operators.test(char) && operators.test(expression))
		return expression

	if(firstZero.test(expression) && number.test(char)) {
		expression = expression.replace(firstZero, '')
	}

	if(isPoint.test(char) && point.test(expression))
		return expression

	expression += char
	return expression
}