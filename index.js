class Stack{
  constructor(num) {
    this.last = {};
    this.limit;
    if(num === undefined) {
      this.limit = 10;
    }else if(typeof num !== 'number' || num === Infinity || num === -Infinity || isNaN(num)) {
      throw new Error('Invalid limit value');
    }else {
      this.limit = num;
    } 
    this.count = 0;
  }
  push(elem){
    if(this.count >= this.limit) {
      throw new Error('Limit exceeded');
    } 
    this.count++;
    this.last[this.count] = elem;
    return this.last;
  }
  pop() {
    if(this.count === 0) {
      throw new Error('Empty Stack');
    }
    return delete this.last[this.count];
  }
  peek() {
    if(this.count === 0) {
      throw new Error('Empty Stack');
    }
    return this.last[this.count];
  }
  isEmpty() {
    return this.count === 0;
  }
  toArray() {
    const newArray = [];
    for(let value in this.last) {
      newArray.push(this.last[value]);
    }
    return newArray;
  }
  static fromIterable(iterable) {
    const stack = new Stack(iterable.length);
    let toReverse = [];
    if(typeof iterable[Symbol.iterator] === 'function') {
       for(const item of iterable) {
        toReverse.push(item);
      } 
      toReverse = toReverse.reverse();
      stack.push(toReverse);
      return stack;
    }else {
      throw new Error('Not iterable');
    }
  }
}

class LinkedList {
  #newArray = [];
  #arrCount = 0;
  constructor() {
    this.head = null
    this.tail = null;
  }
  append(elem) {
    this.#newArray[this.#arrCount] = elem;
    this.#arrCount++;
    const nodeList = new Node(elem);
    if(!this.head || !this.tail) {
      this.head = nodeList;
      this.tail = nodeList;
      return this;
    }
    this.tail.next = nodeList;
    this.tail = nodeList;
    return this;
  }
  prepend(elem) {
    this.#newArray[this.#arrCount] = elem;
    this.#arrCount++;
    const newNode = new Node(elem, this.head);
    this.head = newNode;
    if(!this.tail) {
      this.tail = newNode;
    }
    return this;
  }
  find(elem) {
    let searchArr = this.#newArray;
    let count = 0;
    let searchElem;
    function search(arr) {
      if(!arr.length) {
        return searchElem = null;
      }
      if(arr[count] === elem) {
        return searchElem = elem;
      }else { 
        if(count === arr.length - 1 && arr[count] !== elem) {
          return searchElem = null;
        }
        count++;
        return search(searchArr);
      }
    }
    search(searchArr);
    return searchElem;
  }
  toArray() {
    return this.#newArray;
  }
  static fromIterable(iterable) {
    if(!iterable) {
      throw new Error('Not iterable')
    }
    let list = new LinkedList();
    if(typeof iterable[Symbol.iterator] === 'function') {
      for(const item of iterable) {
        list.append(item);
      }
    }else {
     throw new Error('Not iterable');
    }   
    return list;
    }
}

class Node {
  constructor(item, next = null) {
    this.item = item;
    this.next = next;
  }
}

class Car {
  #brand = '';
  #model = '';
  #yearOfManufacturing = 1950;
  #maxSpeed = 100;
  #maxFuelVolume = 20; 
  #fuelConsumption = 1;
  #damage = 1;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;
  #health = 100;
  
  set brand(value) {
    if(typeof value !== 'string' || value.length < 1 || value.length > 50){
      throw new Error('Invalid brand name')
    }
    this.#brand = value;
  }
  get brand() {
    return this.#brand;
  }
  set model(value) {
    if(typeof value !== 'string' || value.length < 1 || value.length > 50){
      throw new Error('Invalid model name');
    }
    this.#model = value;
  }
  get model() {
    return this.#model;
  }
  set yearOfManufacturing(value) {
    if(typeof value !== 'number' || value === Infinity || isNaN(value) || value < 1950 || value > 2022){
      throw new Error('Invalid year of manufacturing');
    }
    this.#yearOfManufacturing = value;
  }
  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }
  set maxSpeed(value) {
    if(typeof value !== 'number' || value === Infinity || isNaN(value) || value < 100|| value > 330) {
      throw new Error('Invalid max speed');
    }
    this.#maxSpeed = value;
  }
  get maxSpeed() {
    return this.#maxSpeed;
  }
  set maxFuelVolume(value) {
    if(typeof value !== 'number' || value === Infinity || isNaN(value) || value < 20|| value > 100) {
      throw new Error('Invalid max fuel volume');
    }
    this.#maxFuelVolume = value;
  }
  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }
  set fuelConsumption(value) {
    if(typeof value !== 'number' || value === Infinity || isNaN(value) || value <= 0) {
      throw new Error('Invalid fuel consumption');
    }
    this.#fuelConsumption = value;
  }
  get fuelConsumption() {
    return this.#fuelConsumption;
  }
  set damage(value) {
    if(typeof value !== 'number' || value === Infinity || isNaN(value) || value < 1 || value > 5) {
      throw new Error('Invalid damage')
    }
    this.#damage = value;
  }
  get damage() {
    return this.#damage;
  }
  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }
  get isStarted() {
    return this.#isStarted;
  }
  get mileage() {
    return this.#mileage;
  }
  get health() {
    return this.#health;
  }
  start() {
    if(this.#isStarted === false) {
      this.#isStarted = true;
    }else {
      throw new Error('Car has already started');
    }
  }
  shutDownEngine() {
    if(this.#isStarted === true) {
      this.#isStarted = false;
    }else {
      throw new Error('Car hasn`t started yet');
    }
  }
  fillUpGasTank(fuelValue) {
    if(typeof fuelValue !== 'number' || fuelValue === Infinity || isNaN(fuelValue) || fuelValue <= 0) {
      throw new Error('Invalid fuel amount');
    }
    if(fuelValue > this.#maxFuelVolume) {
      throw new Error('Too much fuel');
    }
    if(this.#isStarted === true) {
      throw new Error('You have to shut down your car first');
    }
    this.#currentFuelVolume = fuelValue;
  }
  drive(speed, hour) {
    if(typeof speed !== 'number' || speed === Infinity || isNaN(speed) || speed <= 0) {
      throw new Error('Invalid speed');
    }
    if(typeof hour !== 'number' || hour === Infinity || isNaN(hour) || hour <= 0) {
      throw new Error('Invalid duration');
    }
    if(speed > this.#maxSpeed) {
      throw new Error('Car can`t go this fast');
    }
    if(this.#isStarted === false) {
      throw new Error('You have to start your car first');
    }
    if(this.#currentFuelVolume <= 0){
      throw new Error('You don`t have enough fuel');
    }
    if(this.#health <= 0) {
      throw new Error('Your car won`t make it');
    }
    let way = speed * hour;
    way = way.toFixed(1)
    let damagePerWay = (way * this.#damage) / 100;
    damagePerWay = +damagePerWay.toFixed(1)
    this.#health = this.#health - damagePerWay;
    this.#health = +this.#health.toFixed(1);
    this.#mileage += speed * hour;
    this.#mileage = +this.#mileage.toFixed(1);
    let fuelPerRide = (this.#fuelConsumption * way) / 100;
    fuelPerRide = +fuelPerRide.toFixed(1);
    if(fuelPerRide > this.#maxFuelVolume || fuelPerRide > this.#currentFuelVolume) {
      throw new Error('You don`t have enough fuel');
    }
    this.#currentFuelVolume = this.#currentFuelVolume - fuelPerRide;
    this.#currentFuelVolume = +this.#currentFuelVolume.toFixed(1)
  }
  repair() {
    if(this.#isStarted === true) {
      throw new Error('You have to shut down your car first');
    }
    if(this.#currentFuelVolume !== this.#maxFuelVolume) {
      throw new Error('You have to fill up your gas tank first');
    }
    this.#health = 100;
  }
  getFullAmount() {
    const needToFull = this.#maxFuelVolume - this.#currentFuelVolume;
    return needToFull;
  }
}
