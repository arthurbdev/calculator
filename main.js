const primDisplay = document.querySelector('#primary-display')
const secondDisplay = document.querySelector('#secondary-display')
const numButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operatorBtn')
const equalBtn = document.querySelector('#equalBtn')
const dotBtn = document.querySelector('#dotBtn')
const delBtn = document.querySelector('#deleteBtn')
const clearBtn = document.querySelector('#clearBtn')

let resetScreen = false
let operand = null
let firstNum = secondNum = ''
let roundTo = 4
let maxDigits = 9

numButtons.forEach(btn => btn.addEventListener('click', () => enterNumber(btn.textContent)))
operatorButtons.forEach(btn => btn.addEventListener('click', () => enterOperation(btn.textContent)))
equalBtn.addEventListener('click', evaluate)
dotBtn.addEventListener('click', addDot)
delBtn.addEventListener('click', delChar)
clearBtn.addEventListener('click', clear)

window.addEventListener('keydown', keyboardHandler)

function keyboardHandler(e){
  if(e.key >= 0 && e.key < 10) enterNumber(e.key)
  if(e.key === 'Enter' || e.key ==='=') evaluate()
  if(e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') enterOperation(e.key)
  if(e.key === '.') addDot()
  if(e.key === 'Delete' || e.key === 'Backspace') delChar()
  console.log(e.key)
}

// https://www.peterlunch.com/snippets/javascript-round
function roundToX(num, decimals) {
  return +(Math.round(num + "e" + decimals) + "e-" + decimals);
}

function clear() {
  primDisplay.textContent = '0'
  secondDisplay.textContent = ''
  firstNum = secondNum = ''
  operand = null
  resetScreen = false
}

function delChar() {
  primDisplay.textContent.length <= 1
    ? primDisplay.textContent = '0' 
    : primDisplay.textContent = primDisplay.textContent.slice(0, -1)
}

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
  if(operand === null || resetScreen) return
  secondNum = primDisplay.textContent
  primDisplay.textContent = roundToX(operate(operand, firstNum, secondNum), roundTo)
  secondDisplay.textContent = `${firstNum} ${operand} ${secondNum} =`
  operand = null
  resetScreen = true
}

function enterNumber(num) {
  if(primDisplay.textContent === '0' || resetScreen) clearPrimDisplay()
  if(primDisplay.textContent.length > maxDigits) resetScreen = true
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
      if(num2 === 0) return "Division by 0 is not allowed."
      return divide(num1, num2)
    case '*':
      return multiply(num1, num2)
  }
}
