const primDisplay = document.querySelector('#primary-display')
const secondDisplay = document.querySelector('#secondary-display')
const numButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operatorBtn')
const equalBtn = document.querySelector('#equalBtn')
const dotBtn = document.querySelector('#dotBtn')

let resetScreen = false
let operand = null
let firstNum = secondNum = ''


numButtons.forEach(btn => btn.addEventListener('click', () => enterNumber(btn.textContent)))
operatorButtons.forEach(btn => btn.addEventListener('click', () => enterOperation(btn.textContent)))
equalBtn.addEventListener('click', evaluate)
dotBtn.addEventListener('click', addDot)

function addDot() {
  if(resetScreen) clearPrimDisplay()
  if(primDisplay.textContent.includes('.')) return
  if(primDisplay.textContent === '') primDisplay.textContent = '0'
  primDisplay.textContent += '.'
}

function enterOperation(operator) {
  if(operand !== null) evaluate()
  firstNum = primDisplay.textContent
  operand = operator
  secondDisplay.textContent = firstNum + " " + operand
  resetScreen = true
}

function evaluate() {
  secondNum = primDisplay.textContent
  primDisplay.textContent = operate(operand, firstNum, secondNum)
  secondDisplay.textContent = `${firstNum} ${operand} ${secondNum} =`
  operand = null
  resetScreen = true
}

function enterNumber(num) {
  if(primDisplay.textContent === '0' || resetScreen) clearPrimDisplay()
  primDisplay.textContent += num
}

function clearPrimDisplay(){
  primDisplay.textContent = ''
  resetScreen = false
}

add = (num1,num2) => num1 + num2
subtract = (num1,num2) => num1 - num2
multiply = (num1,num2) => num1 * num2
divide = (num1,num2) => num1 / num2

function operate(operator, num1, num2) {
  num1 = Number(num1)
  num2 = Number(num2)
  switch(operator) {
    case '+':
      return add(num1, num2)
    case '-':
      return subtract(num1, num2)
    case '/':
      if(num2 === 0) return null
      return divide(num1, num2)
    case '*':
      return multiply(num1, num2)
  }
}
