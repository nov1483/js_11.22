function createIterable(start,end){
    const arr = [];
    const finalObject = {};
    if(start === undefined || end === undefined){
        throw new Error('Сannot be empty');
    }else if(isNaN(start) || isNaN(end)){
        throw new Error('Enter only numbers!');
    }else if(start >= end){
        throw new Error('Start cannot be equal to end or greater than end');
    }
    for(let i = start; i <= end; i++){
        arr.push(i);
    }
    for(let i = 0; i < arr.length; i++){
        finalObject[i] = arr[i];
    }
    finalObject[Symbol.iterator] = function() {
        const keys = Object.keys(this);
        const limit = keys.length;
        const context = this;
        let counter = 0;
        return {
            next(){
                if(counter < limit) {
                    return { 
                        done: false, 
                        value: context[keys[counter++]] 
                    }
                  }else {
                        return { 
                            done: true 
                        }
                  }
            }
        }
    }
    return finalObject;
}
const iterable = createIterable();
