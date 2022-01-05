const addToBatch = (array, number) => {
  if (array.length < 5) {
    console.log(array.concat(number));
  } else {
    console.log(array);
  }
}

addToBatch([1], 3); 
addToBatch([1, 2, 3], 4); 
addToBatch([1, 2, 3, 4, 5, 6], 7); 