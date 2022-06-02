const isObject = (obj) => {
    return (Object.prototype.toString.call(obj) === '[object Object]');
}
  
  function detecChanges(obj1, obj2){
    if(!isObject(obj1) || !isObject(obj2)){
        return false;
    }

    let len = null;
    //check if they're of thesame length
    if(Object.keys(obj1).length != Object.keys(obj2).length){
        return false;
    }else{
        len = Object.keys(obj1).length; //use any length
    }

    let match = 0; //store number of matched properties
    Object.keys(obj1).forEach(i => {
        //check if values with the same keys are equal
        if(obj1[i] === obj2[i]){
            match++; //increment the variable
        }
    })
    //check if object length equals the number of matched properties
    if(match === len){
        return true;
    }

    return false;
}

const object1 = {
    value: {
      field: "old value"
    },
    name: 'test'
  }
  const object2 = {
    value: {
      field: "new value"
    },
    name: 'test'
    }
  
console.log(detecChanges(object1,object2))
