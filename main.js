add = (num1,num2) => num1 + num2
subtract = (num1,num2) => num1 - num2
multiply = (num1,num2) => num1 * num2
divide = (num1,num2) => num1 / num2

function operate(operator, num1, num2) {
  switch(operator) {
    case '+':
      return add(num1, num2)
    case '-':
      return subtract(num1, num2)
    case '/':
      return divide(num1, num2)
    case '*':
      return multiply(num1, num2)
  }
}
