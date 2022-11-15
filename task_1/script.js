function concatStrings(string,separator) {
  const sum = [string];
  const fun = (word) => {
    if(word || word === null || word === '') {
      sum.push(word);
      return fun;
    }
    else {
      const restArr = [];
      const id = sum.findIndex(item => typeof item === 'string' ? '' : typeof item === 'bigint' ? parseInt(item) : item === null ? restArr.push(item) : sum.splice(item));
      id === -1 ? '' : sum.splice(id,sum.length);
      return separator && typeof separator === 'string' ? sum.join(separator) : sum.join('');  
    }
  };
  return fun;
}

