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
