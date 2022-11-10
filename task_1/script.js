Array.prototype.customFilter = function(callback, obj){
  if(typeof callback !== 'function'){
    throw new Error('Only functions!')
  }
  if(typeof obj !== 'object' && arguments.length > 1){
    throw new Error('Only objects!')
  }
  let context = this; 
  const outsideObj = this;
  if(obj){
     context = obj;
  }
  const result = [];
  for(let i = 0; i < outsideObj.length; i++){
    if(i in outsideObj){
      if(callback.apply(context,[this[i],i,outsideObj])){
        result.push(this[i]);
      }
    }
  }
  return result;
}
