function bubbleSort(arr) {
  var switchCounter = 0;
  while (true){
    for (var i = 0; i < arr.length; i++) {
    var place1 = arr[i];
    var place2 = arr[i + 1];
      if (place2){
        if (place1 > place2) {
          arr[i] = place2;
          arr[i + 1] = place1;
          switchCounter++;
        }
      }
    }
    if (switchCounter === 0){
      return arr;
    } else {
      switchCounter = 0;
    }
  }
}
