function createDebounceFunction(callback, ms) {
  if(typeof callback !== 'function'){
    throw new Error('Only functions!')
  }else if(!/^(0|[1-9]\d*)(\.[0-9]{1,2})?$/.test(ms)){
    throw new Error('Enter number')
  }
  let timeout;
  return function() {
    const later = () => {
    callback();
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, ms);
  };
}

