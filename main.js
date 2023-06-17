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
