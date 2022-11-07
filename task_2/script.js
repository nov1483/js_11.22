function selectFromInterval(array, startInterval, endInterval) {
    const intervalArray = [];
    const result = [];
    if(!Array.isArray(array) || array.length === 0) {
        throw new Error('Please enter an array');
    }
    if( startInterval > endInterval ){
        for(let i = endInterval; i <= startInterval; i++){
            intervalArray.push(i);
        }
    }
    if(isNaN(startInterval) || isNaN(endInterval)){
        throw new Error('Only numbers!');
    }
    for(let i = startInterval; i <= endInterval; i++){
        intervalArray.push(i);
    }
    
    for(let i = 0; i < array.length; i++){
        if(typeof array[i] !== 'number'){
            throw new Error('Only numbers!');
        }
        for(let j = 0; j < intervalArray.length; j++){
            array[i] === intervalArray[j] ? result.push(array[i]) : '';
        }
    }
    return result;
}
selectFromInterval();