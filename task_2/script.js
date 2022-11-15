class Calculator{
  constructor(a,b) {
    if(!a || typeof a !== 'number') {
      throw new Error ('Cannot be empty or enter a number!');
    }
    if(!b || typeof b !== 'number') {
      throw new Error ('Cannot be empty or enter a number!');
    }
    this.a = a;
    this.b = b;
    this.setX = this.setX.bind(this);
    this.setY = this.setY.bind(this);
    this.getSum = this.getSum.bind(this);
    this.getMul = this.getMul.bind(this);
    this.getSub = this.getSub.bind(this);
    this.getDiv = this.getDiv.bind(this);
  }
  
  setX(num) {
    if(!num || typeof num !== 'number') {
      throw new Error ('Cannot be empty or enter number');
    }
    return this.a = num;
    
    
  }
  setY(num) {
    if(!num || typeof num !== 'number') {
      throw new Error ('Cannot be empty or enter number');
    }
    return this.b = num;
  }
  getSum() { 
    return this.a + this.b;
  }
  getMul() {
    return this.a * this.b;
  }
  getSub() {
    return this.a - this.b;
  }
  getDiv() {
    if(this.b === 0) {
      throw new Error ('Cant divide by zero');
    }
    return this.a / this.b;
  }
}
