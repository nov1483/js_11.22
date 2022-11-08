function createIterable(start,end){    
  if(isNaN(start) || isNaN(end)){
    throw new Error('Enter only numbers!');
    }else if(start >= end){
      throw new Error('Start cannot be equal to end or greater than end');
    }
    const finalObject = {
      from : start,
      to: end,
      [Symbol.iterator](){
        return{
          currentNumber : this.from,
          lastNumber : this.to,
          next(){
            return{
              done : this.currentNumber > this.lastNumber,
              value : this.currentNumber++
            }
          }
        }
      }
    };

  return finalObject;
}
const iterable = createIterable();
