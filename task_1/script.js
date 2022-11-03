function mathWithPrompt(){
    let firstNumber = prompt('Enter First Number');
    let secondNumber = prompt('Enter Second Number');
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    if(/^(0|[1-9]\d*)(\.[0-9]{1,2})?$/.test(firstNumber) && /^(0|[1-9]\d*)(\.[0-9]{1,2})?$/.test(secondNumber)){
        return console.log(
            `First Number: ${firstNumber}.Second Number: ${secondNumber}.Sum:${firstNumber + secondNumber}.Product: ${firstNumber * secondNumber}.Power:${firstNumber ** secondNumber}`
        )
    }
    return console.error('Incorrect input!')
    
}
mathWithPrompt()