function comboWithPrompt(){
  let firstInput = prompt('Enter value');
  let secondInput = prompt('Enter number');
  let result = '';
  if(firstInput.length >= 3 || firstInput > 999 || secondInput < 0 || secondInput >= 10) {
    console.error('Invalid input!');
    return;
  }
  for (var i = 0; i < secondInput; i++) {
      result += firstInput + ' ';
    }
  result = result + '\n';
  return result.repeat(parseInt(secondInput));
}
console.log(comboWithPrompt());