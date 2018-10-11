let screenResult = document.querySelector('.screen-result')
let isEmpty = true

const buttons = document.querySelectorAll('.btn-operator, .btn-number')
buttons.forEach((e) => {
	e.addEventListener('click', () => {
		let charSelected = e.textContent
		if(charSelected === '=') {
			showInScreen(calc(screenResult.innerText))
		} else {
			appendChar(charSelected)
		}
	})
})

const btnDefaults = document.querySelectorAll('.btn-default')
btnDefaults.forEach((e) => {
	e.addEventListener('click',() => {
		if(e.textContent === 'c')
			clean()
	})
})

const calc = function (result) {
	result = cleanExpresion(result)
	return eval(result)
}


const clean = function () {
	isEmpty = true
	screenResult.innerText = 0
}

const appendChar = function (char) {
	screenResult.innerText = cleanScreenExpresion(screenResult.innerText, char)
}

const cleanScreenExpresion = function (str, char) {
	let operators = /[\+|x|\-|\/]$/
	let firstZero = /^0/
	let number = /[0-9]/
	let point = /\.$|\.\d$/ 
	let isPoint = /\./

	if(operators.test(char) && operators.test(str))
		str = str.replace(str.charAt(str.length - 1), '')
	if(firstZero.test(str) && number.test(char) && str.length === 1)
		str = str.replace(firstZero, '')
	if(isPoint.test(char) && point.test(str))
		char = ''
	str += char
	return str
}


const showInScreen = function (result) {
	screenResult.innerText = result
}

const cleanExpresion = function (str) {
	return str.replace(/x/, '*')
}
