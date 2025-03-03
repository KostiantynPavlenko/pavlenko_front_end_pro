const arr = [1, 2, 3, 3, 4, 5];

function removeElement(array, item){
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
      i--;
    }
  }
}

removeElement(arr, 3);

console.log(arr);