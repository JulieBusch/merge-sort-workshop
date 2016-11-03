function split(wholeArray) {
  var size = wholeArray.length,
      firstHalf,
      secondHalf;
  if (size === 1) {
    return wholeArray;
  }
  if (size % 2 !== 0) {
    firstHalf = wholeArray.slice(0, Math.floor(size / 2));
    secondHalf = wholeArray.slice(Math.floor(size / 2));
  } else {
    firstHalf = wholeArray.slice(0, (size / 2));
    secondHalf = wholeArray.slice(size / 2);
  }
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  return arr1.concat(arr2);
}

function mergeSort(array) {
    var sortedArray = [];
    //base case

    if(array.length === 1){
      return array;
    }

    debugger;
    //split the array
    var twoArrays = split(array);
    var array2 = mergeSort(twoArrays[0]);
    var array1 = mergeSort(twoArrays[1]);

    //compare
    if(array2[0] > array1[0]){
    // sortedArray.push(array2[1][0]);
    //  sortedArray.push(array1[0][0]);
      return merge(array1,array2);
    }else{
      return array;
    }




}
