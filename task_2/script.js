function comboWithPrompt(){
    let firstInput = prompt('Enter value');
    let secondInput = prompt('Enter number');
    let rpt = '';
    for (var i = 0; i < secondInput; i++) {
        rpt += firstInput + ' ';
      }
      rpt = rpt + '\n';
      return firstInput.length <= 3 && secondInput > 0 && secondInput <= 10 ? rpt.repeat(parseInt(secondInput)) : console.error('Invalud input!');
}
console.log(comboWithPrompt());