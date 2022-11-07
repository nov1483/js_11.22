function makeDeepCopy(obj) {
    if(typeof obj !== 'object' || obj === null){
        throw new Error('Error! Only objects');
    }
    if(obj instanceof RegExp) { 
        return new RegExp(obj); 
    }
    if(obj instanceof Set) {
        return new Set(obj);
    }
    if(obj instanceof Map) {
        return new Map(obj);
    }
    const cloneObject = {};
    for(const i in obj) {
        if (obj[i] instanceof Object) {
            cloneObject[i] = makeDeepCopy(obj[i]);
            continue;
        }
        cloneObject[i] = obj[i];
    }
    return cloneObject;
}
makeDeepCopy(obj);


