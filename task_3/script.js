function colderWarmer(){
  let firstNumber = prompt('Enter first number');
  let secondNumber = prompt('Enter second number');
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  while(isNaN(firstNumber) || isNaN(secondNumber) || firstNumber === null || secondNumber === null || firstNumber < 0 || secondNumber < 0 || (firstNumber + 100) > secondNumber){
      firstNumber < 0 || secondNumber < 0 
          ? 
              alert('Please enter only positive numbers!') 
          : 
      (firstNumber + 100) > secondNumber 
          ? 
              alert(`Please enter a number greater than ${firstNumber + 100}`)
          :
              alert('Enter only numbers please!');
      firstNumber = prompt('Enter first number');
      secondNumber = prompt('Enter second number');
      firstNumber = Number(firstNumber);
      secondNumber = Number(secondNumber);
  }
  const randomNum = firstNumber + Math.floor(Math.random() * (secondNumber + 1 - firstNumber));
  let userNum = prompt('What number i guess?');
  userNum = Number(userNum);
  if(userNum !== randomNum){
      alert('Cold!');
  }
  if(userNum === randomNum) {
      alert('Great! It’s like you knew the number');
      return;
  }
  let chance = 1;
  const lastNumber = []; 
  lastNumber.push(userNum)
  while(true){
      chance++;
      userNum = prompt('What number i guess?');
      userNum = Number(userNum);
      lastNumber.push(userNum);
      if(userNum  < randomNum &&  userNum > lastNumber[lastNumber.length - 2]){
          alert('Warmer!')
      }
      if(userNum  < randomNum && userNum < lastNumber[lastNumber.length - 2]){
          alert('Colder!')
      }
      if(userNum  > randomNum &&  userNum < lastNumber[lastNumber.length - 2]){
          alert('Warmer!')
      }
      if(userNum > randomNum &&  userNum > lastNumber[lastNumber.length - 2]){
          alert('Colder!')
      }
      if((userNum + 1 ) === randomNum || (userNum - 1) === randomNum){
          alert('You’re almost there')
      }
      if(userNum === randomNum){
          alert(`You did it in ${chance} attempts. Congratulations!`);
          break;
      }
  }
  
  
}
colderWarmer();