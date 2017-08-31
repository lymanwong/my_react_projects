function adjacentElementsProduct(inputArray) {
    var currentHighest=-99999;
    for(var i=0; i < inputArray.length-1; i++) {
        // console.log(inputArray[1] * inputArray[i+1])
      if (currentHighest < (inputArray[i] * inputArray[i+1])) {
      currentHighest = (inputArray[i] * inputArray[i+1]);
    }
  }
  return (currentHighest);
}

// adjacentElementsProduct([3,6,-2,-5,7,3]);
// adjacentElementsProduct([5, 1, 2, 3, 1, 4]);
console.log(adjacentElementsProduct([-23, 4, -3, 8, -12])); //Expected Output:-12
